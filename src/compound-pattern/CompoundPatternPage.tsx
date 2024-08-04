import DisneyList from "./DisneyList";

export default function CompoundPatternPage() {
  return (
    <>
      <div>
        <h1>Compound Pattern</h1>
        <p>
          The Compound Pattern is a structural design pattern that lets you
          compose objects into tree structures to represent part-whole
          hierarchies.
        </p>
        <p>
          This pattern is useful when you need to work with complex objects that
          have a part-whole hierarchy. It allows you to treat individual objects
          and compositions of objects uniformly.
        </p>
        <p>
          The Compound Pattern is commonly used in user interfaces, where you
          need to work with complex UI elements that are composed of other UI
          elements. It is also used in graphics libraries to represent complex
          shapes and figures.
        </p>
        <p>
          The Compound Pattern is similar to the Composite Pattern, but it has
          some key differences. The Compound Pattern is more focused on the
          part-whole hierarchy, while the Composite Pattern is more focused on
          the tree structure.
        </p>
      </div>
      <DisneyList />
    </>
  )
}