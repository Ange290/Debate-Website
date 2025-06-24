export default function AboutUs() {
  return (
    <section className="container mx-auto px-4 py-8" id="about">
      {/* About Text */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
            About Us
          </h2>
          <hr className="border-yellow-500 w-24 md:w-28 mb-6" />
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Debate to Educate (D2E) is a dynamic debate organisation revolutionising public speaking and critical
            thinking across Rwandan schools. We empower students through professional debate competitions,
            public speaking training, and strategic networking. Our platform ensures fairness, inclusivity, and
            excellence in competitive debating, preparing young leaders for national and global impact.
          </p>
        </div>
      </div>

      {/* Fees Cards */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl md:text-2xl font-bold text-center text-blue-900 mb-4">
            Registration Fees
          </h3>
          <hr className="border-yellow-500 w-16 mx-auto mb-6" />
          <div className="space-y-2 text-gray-700 text-lg">
            <p>Primary School: <strong>20,000 RWF</strong></p>
            <p>Secondary School: <strong>20,000 RWF</strong></p>
            <p>Both Combined: <strong>39,999 RWF</strong></p>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl md:text-2xl font-bold text-center text-blue-900 mb-4">
            Competition Fees
          </h3>
          <hr className="border-yellow-500 w-16 mx-auto mb-6" />
          <div className="space-y-2 text-gray-700 text-lg leading-relaxed">
            <p>1 Team (3 Debaters): <strong>20,000 RWF</strong></p>
            <p>2 Teams (6 Debaters): <strong>50,000 RWF</strong></p>
            <p>3 Teams (9 Debaters): <strong>60,000 RWF</strong></p>
            <p>4 Teams (12 Debaters): <strong>75,000 RWF</strong></p>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-gray-600 italic">
        +5,000 RWF per additional person (meals & logistics)
      </p>
    </section>
  );
}
