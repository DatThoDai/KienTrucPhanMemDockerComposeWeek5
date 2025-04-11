from django.http import HttpResponse
from .tasks import add
import celery.exceptions

def home(request):
    try:
        result = add.delay(4, 6)
        result_value = result.get(timeout=10)  
        return HttpResponse(f"Task sent! Result will be: {result_value}")
    except celery.exceptions.TimeoutError:
        return HttpResponse("Task timed out! Please try again later.", status=500)
    except Exception as e:
        return HttpResponse(f"Error: {str(e)}", status=500)