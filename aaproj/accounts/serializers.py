from rest_framework import serializers
from django.contrib.auth.models import User, Permission, Group
from accounts.models import Lead


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')
        # extra_kwargs = {'password': {'write_only': True}}

    #try add validation combination
    def validate_username_email(self, attrs):
        if attrs['username'] == null or attrs['email'] == null and validated_data['password']:
            raise serializers.ValidationError({"Username or Email should not  be null"})
        return attrs

    def create(self, validated_data):
        user = User(
            email = validated_data["email"],
            username = validated_data["username"]
        )
        user.set_password(validated_data["password"])
        user.save()
        return user

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

        return user

# Permission Serializer
class PermissionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = '__all__'
        
# Roles Serializer
class RolesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'

# User - Roles Serializer
class UserRolesSerializer(serializers.ModelSerializer):
    groups = RolesSerializer(many=True, read_only=True, required=False)

    class Meta:
        model = User
        # fields = "__all__"
        fields = ('id', 'groups')
        lookup_field = 'id'

    def update(self, validated_data):
        user = User(
            id = validated_data["id"],
            groups = validated_data["groups"]
        )
        user.update()
        return user

# Lead Serializer 
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = "__all__"


        