from datetime import datetime, timedelta
from functools import wraps
import cv2
import easyocr
import jwt
from flask import request, jsonify, abort
import os

from flask_cors import cross_origin

from fyp import app, bcrypt, db
from fyp.models import User, Course, Video


def token_required(allowed_roles):
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            token = None
            if 'x-access-token' in request.headers:
                token = request.headers['x-access-token']

            if not token:
                return jsonify({'message': 'You are not authorized!'}), 401

            try:
                data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
                current_user = User.query.filter_by(email=data['email']).first()
                expiration = datetime.fromisoformat(data['expiration'])
                if current_user is None:
                    return jsonify({'message': 'Invalid token!'}), 401

                if current_user.role not in allowed_roles:
                    return jsonify({'message': 'Unauthorized access!'}), 401

                if expiration < datetime.now():
                    return jsonify({'message': 'Token has expired'}), 401

            except:
                return jsonify({'message': 'Authentication token is invalid!'}), 401

            return f(current_user, *args, **kwargs)

        return decorated_function

    return decorator


@app.route("/api/v1/register", methods=["GET", "POST"])
def register_user():
    username = request.json["username"]
    email = request.json["email"]
    # password = request.json["password"]
    hashed_password = bcrypt.generate_password_hash(request.json["password"]).decode('utf-8')
    role = request.json['role']

    user_exists = User.query.filter_by(email=email).first() is not None
    username_exists = User.query.filter_by(username=username).first() is not None

    if username_exists:
        return jsonify({"error": "Username or email already exists"}), 409

    if user_exists:
        return jsonify({"error": "Email already exists"}), 409

    new_user = User(username=username, email=email, password=hashed_password, role=role)

    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User created successfully'})


@app.route("/api/v1/login", methods=["POST"])
def user_login():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorized"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401

    role = user.role

    token = jwt.encode({
        'email': email,
        'expiration': str(datetime.now() + timedelta(seconds=86400)),
        'role': role
    },
        app.config['SECRET_KEY'])
    return jsonify({"token": token})


@app.route('/api/v1/all', methods=['GET'])
@token_required(['ADMIN'])
def get_all_user(current_user):
    all_users = User.query.all()
    user_list = []
    for user in all_users:
        user_data = {'id': user.id, 'username': user.username, 'email': user.email, 'password': user.password,
                     'role': user.role}

        user_list.append(user_data)
    return jsonify({'user': user_list})


@app.route('/api/v1/delete/<int:user_id>', methods=['GET', 'POST'])
@token_required(['ADMIN'])
def delete_user(current_user, user_id):
    user = User.query.filter_by(id=user_id).first()

    if user is None:
        return jsonify({"error": "User does not exists"}), 404

    db.session.delete(user)
    db.session.commit()

    return jsonify({'message': "User deleted successfully"}), 200


@app.route('/api/v1/update/<int:user_id>', methods=['GET', 'POST'])
@token_required(['ADMIN'])
def update_user(current_user, user_id):
    user = User.query.filter_by(id=user_id).first()

    if user is None:
        abort(404, 'User does not exist')

    user.role = request.json['role']
    db.session.commit()

    return jsonify({'message': 'User updated successfully'})
# def update_user(current_user, user_id):
#     user = User.query.filter_by(id=user_id).first()
#
#     if user is None:
#         return jsonify({'error': 'User does not exist'})
#
#     db.session.delete(user)
#     db.session.commit()
#
#     # username = request.json['username']
#     # email = request.json['email']
#     # hashed_password = bcrypt.generate_password_hash(request.json["password"]).decode('utf-8')
#     role = request.json['role']
#     updated_user = User(id=user_id, role=role)
#     db.session.add(updated_user)
#     db.session.commit()
#     return jsonify({'message': "User is updated successfully"})


@app.route("/api/v1/addcourse", methods=['GET', 'POST'])
@token_required(['ADMIN'])
def create_course(current_user):
    # id = request.json['id']
    title = request.json['title']
    language = request.json['language']
    description = request.json['description']

    course = Course(title=title, language=language, description=description)

    db.session.add(course)
    db.session.commit()

    return jsonify({'course_id': course.id})


@app.route('/api/v1/course/register/<int:course_id>', methods=['POST'])
@token_required(['STUDENT'])
def register_course(current_user):
    return jsonify({'message': 'Course Registered Successfully'})


@app.route('/api/v1/ocr/<string:path>', methods=['GET', 'POST'])
@cross_origin()
@token_required(['STUDENT'])
def perform_ocr(current_user, path):
    # Load the video file
    name = request.json['name'] + ".mp4"
    cap = cv2.VideoCapture("C:\\Users\\Taha Rasool\\" + name)
    texts = []

    # Set the timestamp to extract a frame at
    timestamp = request.json['time']
    fps = cap.get(cv2.CAP_PROP_FPS)
    frame_number = int(timestamp * fps)
    cap.set(cv2.CAP_PROP_POS_FRAMES, frame_number)

    # Extract the frame
    ret, frame = cap.read()
    if ret:

        cropped_image = frame[220:850, 40:1890]
        # cv2.imwrite("C:\\Users\\Taha Rasool\\frame.jpg", cropped_image)
        reader = easyocr.Reader(['en'], gpu=False)
        result = reader.readtext(cropped_image, width_ths=1890)
        filename = "output.txt"
        if os.path.exists(filename):
            os.remove(filename)

        with open(filename, "w") as file:
            for (bbox, text, prob) in result:
                file.write(str(text) + "\n")
        with open("output.txt", "w") as file:
            for (bbox, text, prob) in result:
                file.write(str(text) + "\n")

        for (bbox, text, prob) in result:
            texts.append(f"{str(text)}")
    else:
        print('Unable to extract frame at', timestamp, 'seconds')
    # Release the video capture object
    cap.release()
    return jsonify({"texts": texts})


@app.route('/api/v1/all_course', methods=['GET'])
@token_required(['STUDENT'])
def get_all_courses(current_user):
    all_course = Course.query.all()
    course_list = []
    for course in all_course:
        user_data = {'id': course.id, 'title': course.title, 'language': course.language,
                     'description': course.description}

        course_list.append(user_data)

    return jsonify({'courses': course_list})


@app.route('/api/v1/getuser/<string:email>', methods=['GET', 'POST'])
@token_required(['STUDENT'])
def get_user_with_username(current_user, email):
    # Find user by username in the database
    user = User.query.filter_by(email=email).first()

    # If the user exists, return a JSON response with user details
    if user:
        user_data = {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'role': user.role
        }
        return jsonify({'user': user_data})

    # If the user does not exist, return a 404 error
    return jsonify({'message': 'User not found'}), 404


@app.route('/api/v1/add/video', methods=['GET', 'POST'])
@cross_origin()
@token_required(['ADMIN'])
def add_video(current_user):
    title = request.form.get('title')
    course_id = request.form.get('course_id')
    video_file = request.files.get('video_file')

    # Perform validation or additional processing as required
    # Create the video object
    video = Video(title=title, course_id=course_id, video_file=video_file.read())

    # Save the video to the database
    db.session.add(video)
    db.session.commit()

    # Return a response
    return jsonify({'message': 'Video added successfully'}), 200
