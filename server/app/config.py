"""
Global Flask Application Setting
See `.flaskenv` for default settings.
 """

import os
from dotenv import load_dotenv


load_dotenv()
parent = os.path.dirname


class Config(object):
    # If not set fall back to production for safety
    FLASK_ENV = os.getenv('FLASK_ENV', 'production')

    # Set FLASK_SECRET on your production Environment
    SECRET_KEY = os.getenv('FLASK_SECRET', 'Secret')

    # If not set, fall back to False for safety
    DEBUG = os.getenv('FLASK_DEBUG', False)

    APP_DIR = parent(__file__)
    ROOT_DIR = parent(parent(APP_DIR))
    DIST_DIR = os.path.join(ROOT_DIR, 'dist')

    if not os.path.exists(DIST_DIR) and FLASK_ENV == 'production':
        raise Exception(
            'DIST_DIR not found: {}'.format(DIST_DIR))
