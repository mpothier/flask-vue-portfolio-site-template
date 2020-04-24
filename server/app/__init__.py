import os

from flask import Flask, current_app, send_file


def create_app():
    app = Flask(__name__, static_folder='../../dist/static')

    from .api import api_bp
    app.register_blueprint(api_bp)

    # Import config object to find dist (built) directory
    from .config import Config
    app.logger.info('>>> {}'.format(Config.FLASK_ENV))
    app.config.from_object('app.config.Config')

    # Serve static assets found in the "public" folder
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def catch_all(path):
        dist_dir = current_app.config['DIST_DIR']
        asset_path = os.path.join(dist_dir, path)
        # Send specified static asset, if one exists in folder
        if path != "" and os.path.exists(asset_path):
            print(f"Sending asset at {asset_path}")
            return send_file(asset_path)
        # Default to sending index.html file; route remains intact and enables
        # Vue Router to route to corresponding components
        root_path = os.path.join(dist_dir, 'index.html')
        print(f"Sending asset at {root_path}")
        return send_file(root_path)

    return app
