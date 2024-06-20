## Requirements

- [Docker](https://docs.docker.com/install/)

## How to run it?

- Update env variables

```bash
cp .env.example .env
```

- Install dependencies

```bash
docker compose run app pnpm i
```

- Build

```bash
docker compose run app pnpm run build
```

- Run Account

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up
```

## Where is the application running?

- Account - [http://localhost:3000](http://localhost:3000)


## License

This project is licensed under the [MIT License](LICENSE).# ASD_frontend
