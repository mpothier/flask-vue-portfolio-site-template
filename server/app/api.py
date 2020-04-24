import os
import json
from datetime import datetime

from flask import Blueprint, jsonify, request, current_app, abort
from .config import Config


api_bp = Blueprint('api_bp', __name__, url_prefix='/api')


@api_bp.route('/test_post', methods=['POST'])
def test_post():
    data = request.get_json()
    return jsonify(data), 201


@api_bp.route('/test_get')
def test_get():
    timestamp = datetime.utcnow().isoformat()
    return {'timestamp': timestamp}


# @api_bp.route('/linkedin_profile')
# def linkedin_profile():
#     # Add API calls here
#     return {}


@api_bp.route('/work_content/<string:title>')
def get_work_content(title):
    dist_dir = current_app.config['DIST_DIR']
    content_path = os.path.join(dist_dir, "work_content", f"{title}.json")
    if title != "" and os.path.exists(content_path):
        with open(content_path) as f:
            data = json.load(f)
            response = jsonify(data)
            # CORS mod needed for decoupled server development environment
            # and production environment security
            print(Config.FLASK_ENV)
            if Config.FLASK_ENV == "development":
                response.headers.add(
                    'Access-Control-Allow-Origin',
                    '*'
                )
            else:
                response.headers.add(
                    'Access-Control-Allow-Origin',
                    'http://www.your-website-url.tld'
                )
            return response
    else:
        abort(404)
