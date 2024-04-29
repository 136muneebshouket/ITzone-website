import React from "react";
import Contact_link from "../small_components/Contact_link";

const Services_Header = () => {
    return (
        <section class="header_area">
            {/* header navbar */}
            <div
                id="home"
                class="header_hero bg-darkblue-color bg-[url('/assets/images/lightgradient.png')] bg-center bg-no-repeat h-screen justify-start relative z-10 overflow-hidden flex items-center"
            >
                <div class="container w-11/12 md:w-4/5">
                    <h1 className="mb-6">
                        Let's Create Powerful <span className="text-yellow">Digital Products</span> From Square One.
                    </h1>
                    <p className="text-white text-center p_under_heading2">
                        Explore the right tech solution for your next tech project — leveraging execution-driven devs and modern tech stacks.
                    </p>

                    <Contact_link
                        position={"m-auto my-9"}
                        text={"Get Expert Advise"}
                    />
                </div>
            </div>
        </section>
    );
};

export default Services_Header;
