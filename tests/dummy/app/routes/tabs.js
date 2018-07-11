import Route from "@ember/routing/route";
import { A } from "@ember/array";
import EmberObject from "@ember/object";

export default Route.extend({
  model: function() {
    const sections = A();

    {
      const subSections = A();
      {
        const examples = A();

        for (let i = 0; i < 35; i++) {
          examples.pushObject(
            new EmberObject({
              label:
                i === 17 ? `Panel with a super long title${i}` : `Panel ${i}`,
              content:
                i === 2
                  ? "<p> Bigger element. </p><br/><p>With 2 paragraphs.</p>"
                  : `<div> Content ${i}</div>`,
              selected: i === 10
            })
          );
        }

        subSections.pushObject(
          new EmberObject({
            label: "Tabs",
            examples
          })
        );
      }
      sections.pushObject(new EmberObject({ subSections: subSections }));
    }

    return sections;
  }
});
