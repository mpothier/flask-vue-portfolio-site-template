from app import create_app
from app.config import Config


app = create_app()

if __name__ == "__main__":
    app.run(port=5000, debug=Config.DEBUG)