FROM python:3.10
WORKDIR /app
COPY app/requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
COPY app/ .
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "myapp.wsgi"]