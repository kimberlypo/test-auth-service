from accounts.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# Leads
class UserViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    authentication_classes = ()
    permission_classes = [permissions.AllowAny]
    groups = ()

    serializer_class = LeadSerializer