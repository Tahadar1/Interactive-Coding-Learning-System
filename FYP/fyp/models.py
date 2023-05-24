from fyp import db, login_manager
from flask_login import UserMixin
from sqlalchemy import LargeBinary


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


association_table = db.Table('registeredIn',
                             db.Column('user_id', db.Integer(), db.ForeignKey('user.id')),
                             db.Column('course_id', db.Integer(), db.ForeignKey('course.id'))
                             )


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(25), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(10), nullable=False, default='STUDENT')
    courses = db.relationship('Course', secondary=association_table, backref='enrolled_users')

    def __rep__(self):
        return f"User('{self.username}', '{self.email}', '{self.password}', '{self.role}')"


class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    language = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)

    users = db.relationship("User", secondary=association_table, backref="enrolled_users")
    videos = db.relationship("Video", backref="course", lazy=True)

    def __rep__(self):
        return f"Course('{self.id}','{self.title}','{self.language}','{self.description}')"


class Video(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    video_file = db.Column(LargeBinary(length=1073741824), nullable=False)

    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)

    def __repr__(self):
        return f"Video('{self.title}')"
