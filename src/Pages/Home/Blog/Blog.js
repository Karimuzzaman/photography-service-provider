import React from 'react';

const Blog = () => {
    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingOne">
                    <button className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                        aria-controls="collapseOne">
                        Differences between SQL and NoSQL?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
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
                    <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
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
                    <div className="accordion-body py-4 px-5">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default,
                        until the collapse plugin adds the appropriate classNamees that we use to style each
                        element. These classNamees control the overall appearance, as well as the showing and
                        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just about any HTML can go within
                        the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingThree">
                    <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                        aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-5">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default,
                        until the collapse plugin adds the appropriate classNamees that we use to style each
                        element. These classNamees control the overall appearance, as well as the showing and
                        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just about any HTML can go within
                        the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingFour">
                    <button className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true"
                        aria-controls="collapseFour">
                        Accordion Item #4
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-5">
                        <strong>This is the first item's accordion body.</strong> It is shown by default,
                        until the collapse plugin adds the appropriate classNamees that we use to style each
                        element. These classNamees control the overall appearance, as well as the showing and
                        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just about any HTML can go within
                        the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;