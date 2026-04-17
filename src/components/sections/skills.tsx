import { useState } from "react";
import ReactLogo from "../icons/react";
import Chip from "../chip";
import Tile from "../tiles";
import TSLogo from "../icons/ts";
import CSSLogo from "../icons/css";
import TailwindLogo from "../icons/tailwind";
import NodeLogo from "../icons/nodejs";
import ExpressJSLogo from "../icons/expressjs";
import FastifyLogo from "../icons/fastify";
import RESTApiLogo from "../icons/restapi";
import MongoLogo from "../icons/mongodb";
import SQLLogo from "../icons/sql";
import RedisLogo from "../icons/redis";
import CppLogo from "../icons/cpp";
import RabbitMQLogo from "../icons/rabbit";
import S3Logo from "../icons/s3";
import AWSLogo from "../icons/aws";
import DockerLogo from "../icons/docker";
import CICDLogo from "../icons/cicd";
import ObserveLogo from "../icons/observability";
import OpenSearchLogo from "../icons/opensearch";
export default function Skills() {
  const [frontendBtn, setFrontendBtn] = useState(true);
  const [backendBtn, setBackendBtn] = useState(false);
  const [dataBtn, setDataBtn] = useState(false);
  const [devopsBtn, setDevopsBtn] = useState(false);
  return (
    <section
      id="skills"
      className="flex md:flex-row flex-col md:justify-between md:items-center px-15 py-28 border-t border-border"
    >
      <div className="md:flex-1">
        <p className="section-label text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-accent mb-3">
          Technical Skills
        </p>
        <h2 className="font-extrabold font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-text">
          A craftsman
          <br />
          <em className="bold italic text-text-3">knows his tools</em>
        </h2>
      </div>
      <div className="md:flex-1">
        <div className="flex gap-px mt-9 border-b border-border flex-wrap">
          <button
            className={`tab-btn font-sans text-[0.76rem] font-semibold tracking-[0.07em] uppercase bg-transparent  px-5 py-2.5 cursor-pointer  ${frontendBtn ? `text-accent border-b-accent border-b-2` : `border-b-2 border-transparent transition-colors hover:text-text-2  text-text-3 `}`}
            onClick={() => {
              setDevopsBtn(false);
              setBackendBtn(false);
              setFrontendBtn(true);
              setDataBtn(false);
            }}
            data-tab="frontend"
          >
            Frontend
          </button>
          <button
            className={`tab-btn font-sans text-[0.76rem] font-semibold tracking-[0.07em] uppercase bg-transparent  px-5 py-2.5 cursor-pointer  ${backendBtn ? `text-accent border-b-accent border-b-2` : `border-b-2 border-transparent transition-colors hover:text-text-2  text-text-3 `}`}
            onClick={() => {
              setDevopsBtn(false);
              setBackendBtn(true);
              setFrontendBtn(false);
              setDataBtn(false);
            }}
            data-tab="backend"
          >
            Backend
          </button>
          <button
            className={`tab-btn font-sans text-[0.76rem] font-semibold tracking-[0.07em] uppercase bg-transparent  px-5 py-2.5 cursor-pointer  ${dataBtn ? `text-accent border-b-accent border-b-2` : `border-b-2 border-transparent transition-colors hover:text-text-2  text-text-3 `}`}
            onClick={() => {
              setDevopsBtn(false);
              setBackendBtn(false);
              setFrontendBtn(false);
              setDataBtn(true);
            }}
            data-tab="data"
          >
            Data &amp; Storage
          </button>
          <button
            className={`tab-btn font-sans text-[0.76rem] font-semibold tracking-[0.07em] uppercase bg-transparent  px-5 py-2.5 cursor-pointer  ${devopsBtn ? `text-accent border-b-accent border-b-2` : `border-b-2 border-transparent transition-colors hover:text-text-2  text-text-3 `}`}
            onClick={() => {
              setDevopsBtn(true);
              setBackendBtn(false);
              setFrontendBtn(false);
              setDataBtn(false);
            }}
            data-tab="devops"
          >
            DevOps &amp; Cloud
          </button>
        </div>

        <div
          id="tab-frontend"
          className={`tab-panel flex flex-row flex-wrap gap-2.5 pt-8 ${frontendBtn ? `active` : `hidden`}`}
        >
          <Tile
            style="chip-react"
            logo={<ReactLogo height={48} width={48} />}
            title="React"
          />
          <Tile
            style="chip-react"
            logo={<ReactLogo height={48} width={48} />}
            title="React-Native"
          />
          <Tile
            style="chip-ts"
            logo={<TSLogo height={48} width={48} />}
            title="TypeScript"
          />
          <Tile
            style="chip-css"
            logo={<CSSLogo height={48} width={48} />}
            title="CSS / Sass"
          />
          <Tile
            style="chip-tailwind"
            logo={<TailwindLogo height={60} width={48} />}
            title="Tailwind"
          />
        </div>
        <div
          id="tab-backend"
          className={`tab-panel flex flex-row flex-wrap gap-2.5 pt-8 ${backendBtn ? `active` : `hidden`}`}
        >
          <Tile
            style="chip-node"
            logo={<NodeLogo height={48} width={48} />}
            title="Node.js"
          />
          <Tile
            style="chip-express"
            logo={<ExpressJSLogo height={48} width={48} />}
            title="Express"
          />
          <Tile
            style="chip-python"
            logo={<FastifyLogo height={48} width={48} />}
            title="Fastify"
          />
          <Tile
            style="chip-react"
            logo={<CppLogo height={48} width={48} />}
            title="C++"
          />
          <Tile
            style="chip-rest"
            logo={<RESTApiLogo height={48} width={48} />}
            title="REST APIs"
          />
        </div>
        <div
          id="tab-data"
          className={`tab-panel flex flex-row flex-wrap gap-2.5 pt-8 ${dataBtn ? `active` : `hidden`}`}
        >
          <Tile
            style="chip-mongo"
            logo={<MongoLogo height={48} width={48} />}
            title="MongoDB"
          />
          <Tile
            style="chip-postgres"
            logo={<SQLLogo height={48} width={48} />}
            title="SQL"
          />
          <Tile
            style="chip-redis"
            logo={<RedisLogo height={48} width={48} />}
            title="Redis"
          />
          <Tile
            style="chip-python"
            logo={<RabbitMQLogo height={48} width={48} />}
            title="RabbitMQ"
          />
          <Tile
            style="chip-mongo"
            logo={<S3Logo height={48} width={48} />}
            title="AWS S3"
          />
        </div>
        <div
          id="tab-devops"
          className={`tab-panel flex flex-row flex-wrap gap-2.5 pt-8 ${devopsBtn ? `active` : `hidden`}`}
        >
          <Tile
            style="chip-aws"
            logo={<AWSLogo height={48} width={48} />}
            title="AWS"
          />
          <Tile
            style="chip-docker"
            logo={<DockerLogo height={48} width={48} />}
            title="Docker"
          />
          <Tile
            style="chip-cicd"
            logo={<CICDLogo height={48} width={48} />}
            title="CI / CD"
          />
          <Tile
            style="chip-python"
            logo={<ObserveLogo height={48} width={48} />}
            title="Observability"
          />
          <Tile
            style="chip-react"
            logo={<OpenSearchLogo height={48} width={48} />}
            title="OpenSearch"
          />
        </div>
      </div>
    </section>
  );
}
