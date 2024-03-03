import { useState } from "react";

const Section = ({ heading, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-slate-500 m-2 p-2">
      <h1>{heading}</h1>
      <div>
        {!isVisible ? (
          <button
            onClick={() => {
                setIsVisible();
            }}
          >
            show
          </button>
        ) : (
          <button
            onClick={() => {
                setIsVisible();
            }}
          >
            hide
          </button>
        )}
      </div>
      <p>{isVisible ? description : ""}</p>
    </div>
  );
};

const Offers = () => {
  const [sectionConfig, setSectionConfig] = useState("");

  return (
    <div>
      <Section
        heading={"About foodvilla"}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        voluptas numquam, optio, ducimus excepturi atque, ipsum harum aspernatur
        eum nesciunt molestias deleniti suscipit officiis? Praesentium!`}
        isVisible={sectionConfig==="about"}
        setIsVisible={() =>
            sectionConfig!=="about"?setSectionConfig("about"):setSectionConfig("")
        }
      />
      <Section
        heading={"Team foodvilla"}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        voluptas numquam, optio, ducimus excepturi atque, ipsum harum aspernatur
        eum nesciunt molestias deleniti suscipit officiis? Praesentium!`}
        isVisible={sectionConfig==="team"}
        setIsVisible={() =>
            sectionConfig!=="team"?setSectionConfig("team"):setSectionConfig("")
          }
      />
      <Section
        heading={"Careers"}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        voluptas numquam, optio, ducimus excepturi atque, ipsum harum aspernatur
        eum nesciunt molestias deleniti suscipit officiis? Praesentium!`}
        isVisible={sectionConfig==="careers"}
        setIsVisible={() =>
            sectionConfig!=="careers"?setSectionConfig("careers"):setSectionConfig("")
          }
      />
    </div>
  );
};

export default Offers;
