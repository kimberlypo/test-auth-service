from .views import RegisterAPI, LoginAPI, PermissionsAPI, RolesAPI, UserList, UserAndRolesAPI, home
from django.urls import path
from rest_framework import routers
from .api_views import UserViewSet

urlpatterns = [
    path('', home, name='home_page'),

    # API views
    path('api/register/', RegisterAPI.as_view(), name='registerAPI'),
    path('api/login/', LoginAPI.as_view(), name='loginAPI'),
    path('api/permissions/', PermissionsAPI.as_view(), name='permissionsAPI'),
    path('api/roles/', RolesAPI.as_view(), name='rolesAPI'),
    path('api/users/', UserList.as_view(), name='usersAPI'),
    path('api/users/roles/', UserAndRolesAPI.as_view(), name='user_rolesAPI'),
    # path('api/userSample/', UserViewSet, name='userSample'),
]