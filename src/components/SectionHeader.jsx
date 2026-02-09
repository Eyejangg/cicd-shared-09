const SectionHeader = ({ title, icon = "📚" }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-gray-800">
        {icon} {title}
      </h2>
      <div className="h-1 w-12 bg-purple-600 rounded mt-2" />
    </div>
  );
};

export default SectionHeader;
