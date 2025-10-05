import { components } from "./componentData";
import AnimatedCard from "./AnimatedCard";

export default function Cards({
  clickHandler,
}: {
  clickHandler: (title: string, num: number) => void;
}) {
  return (
    <div className="containerCards">
      {components.map((component) => (
        <AnimatedCard
          key={component.id}
          icon={component.icon}
          title={component.title}
          description={component.description}
          onClick={() => clickHandler(component.title, component.id - 1)}
          previewVideo={component.previewVideo} // ✅ new prop
        />
      ))}
    </div>
  );
}