import { useState } from "react";

const Section = ({ title, details, isVisible, setIsVisible, id }) => {
  return (
    <div className="p-3 border border-black m-3">
      <p className="text-xl font-bold">{title}</p>
      {isVisible ? (
        <button className="underline" onClick={() => setIsVisible(" ")}>
          hide
        </button>
      ) : (
        <button className="underline" onClick={() => setIsVisible(id)}>
          Show
        </button>
      )}
      {isVisible && <p>{details}</p>}
    </div>
  );
};

const Mart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  console.log("render");
  return (
    <>
      <h1 className="text-3xl font-bold p-3">This is Mart</h1>
      <Section
        key={"about"}
        title={"About"}
        isVisible={visibleSection === "about"}
        details={
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        }
        setIsVisible={(id)=>setVisibleSection(id)}
        id={"about"}
      />
      <Section
        key={"team"}
        title={"Team"}
        isVisible={visibleSection === "team"}
        details={
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        }
        setIsVisible={(id)=>setVisibleSection(id)}
        id={"team"}
      />
      <Section
        key={"product"}
        title={"Product"}
        isVisible={visibleSection === "product"}
        setIsVisibleSection
        details={
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        }
        setIsVisible={(id)=>setVisibleSection(id)}
        id={"product"}
      />
    </>
  );
};

export default Mart;
