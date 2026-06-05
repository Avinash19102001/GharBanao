from backend.app.repository.contractor_repository import UserRepository


class UserService:

    def __init__(self, repository: UserRepository):
        self.repository = repository

    def create_user(self, user_data):

        return self.repository.create_user(user_data)

    def get_all_users(self):

        return self.repository.get_all_users()