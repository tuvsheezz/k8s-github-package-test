FROM python:3.11-alpine as builder

WORKDIR /usr/src/app

RUN pip install poetry

COPY pyproject.toml poetry.lock ./

RUN poetry export -f requirements.txt > requirements.txt


FROM python:3.11-alpine

ENV PYTHONUNBUFFERED=1

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000
CMD [ "uvicorn", "api.main:app", "--host", "0.0.0.0"]
