import React from 'react';
import { Helmet } from "react-helmet";

// creating blog components.
const Blog = () => {
    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingOne">
                    <button className=" text-3xl font-semibold text-sky-800 
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
     text-left
        bg-amber-100
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                        aria-controls="collapseOne">
                        Difference between SQL and NoSQL?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show text-3xl text-gray-800 font-semibold bg-violet-100" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-5">
                        <strong>Answer:</strong> Type –
                        SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. <br />

                        <br />
                        Language –
                        SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.
                        A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. <br />

                        <br />

                        Scalability –
                        In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. It is similar to adding more floors to the same building versus adding more buildings to the neighborhood. Thus NoSQL can ultimately become larger and more powerful, making these databases the preferred choice for large or ever-changing data sets. <br />

                        <br />
                        Structure –
                        SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure.
                        <br /><br />

                        Property followed –
                        SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance).

                        <br /><br />
                        Support –
                        Great support is available for all SQL database from their vendors. Also a lot of independent consultations are there who can help you with SQL database for a very large scale deployments but for some NoSQL database you still have to rely on community support and only limited outside experts are available for setting up and deploying your large scale NoSQL deployments.
                    </div>
                </div>
            </div>
            <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingTwo">
                    <button className=" text-3xl font-semibold text-sky-800
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
         text-left
        bg-indigo-300
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                        aria-controls="collapseTwo">
                        What is JWT, and how does it work?
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-5 text-3xl text-gray-800 font-semibold bg-fuchsia-100">
                        <strong>Answer:</strong> JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br /> <br />

                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                        <br /> <br />
                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. <br /> <br />

                        Once decoded, you will get two JSON strings: <br /> <br />

                        The header and the payload. <br /> <br />
                        The signature. <br /> <br />
                        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.   <br /> <br />

                        The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
                        <br /> <br />
                        There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. <br /> <br />

                        The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                    </div>
                </div>
            </div>
            <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button className=" text-3xl font-semibold text-sky-800
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
         text-left
        bg-red-100
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                        aria-controls="collapseThree">
                        What is the difference between javascript and NodeJS ?
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-5 text-3xl text-gray-800 font-semibold bg-orange-100">
                        <strong>Answer:</strong> Javascript is a programming language that is used for writing scripts on the website. NodeJS is a Javascript runtime environment. <br /> <br />
                        Javascript can only be run in the browsers. We can run Javascript outside the browser with the help of NodeJS. <br /> <br />
                        Javascript basically used on the client-side.NodeJS mostly used on the server-side. <br /> <br />
                        Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                        V8 is the Javascript engine inside of node.js that parses and runs Javascript. <br /> <br />
                        Javascript is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. Nodejs is written in C, C++ and Javascript. <br /> <br />
                        Javascript is used in frontend development.Nodejs is used in server-side development.
                    </div>
                </div>
            </div>
            <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingFour">
                    <button className=" text-3xl font-semibold text-sky-800 
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
         text-left
        bg-red-200
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true"
                        aria-controls="collapseFour">
                        How does NodeJS handle multiple requests at the same time?
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-5 text-3xl text-gray-800 font-semibold bg-emerald-100">
                        <strong>Answer:</strong> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. <br /> <br />

                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                    </div>
                </div>
            </div>
            <Helmet>
                <title>Blog</title>
            </Helmet>
        </div>
    );
};

export default Blog;