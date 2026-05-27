function ProjectSkeleton() {

  return (

    <div
      className="
        bg-white
        rounded-3xl
        p-6
        shadow-sm
        border
        border-gray-100
        animate-pulse
      "
    >

      {/* TOP */}

      <div
        className="
          flex
          items-center
          justify-between
          mb-6
        "
      >

        <div
          className="
            w-14
            h-14
            rounded-xl
            bg-gray-200
          "
        />

        <div
          className="
            h-7
            w-24
            rounded-full
            bg-green-100
          "
        />

      </div>

      {/* TITLE */}

      <div
        className="
          h-7
          w-3/4
          bg-gray-300
          rounded
          mb-4
        "
      />

      {/* DESCRIPTION */}

      <div
        className="
          h-4
          w-full
          bg-gray-200
          rounded
          mb-2
        "
      />

      <div
        className="
          h-4
          w-5/6
          bg-gray-200
          rounded
          mb-2
        "
      />

      <div
        className="
          h-4
          w-2/3
          bg-gray-200
          rounded
          mb-6
        "
      />

      {/* TECH STACK */}

      <div
        className="
          flex
          gap-2
          mb-8
        "
      >

        <div
          className="
            h-8
            w-16
            rounded-full
            bg-gray-200
          "
        />

        <div
          className="
            h-8
            w-20
            rounded-full
            bg-gray-200
          "
        />

        <div
          className="
            h-8
            w-14
            rounded-full
            bg-gray-200
          "
        />

      </div>

      {/* BUTTONS */}

      <div className="flex gap-4">

        <div
          className="
            flex-1
            h-12
            rounded-xl
            bg-green-200
          "
        />

        <div
          className="
            flex-1
            h-12
            rounded-xl
            bg-gray-200
          "
        />

      </div>

    </div>
  );
}

export default ProjectSkeleton;