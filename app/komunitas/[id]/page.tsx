import { notFound } from "next/navigation";
import { Metadata } from "next";
import { 
  Users, 
  BookOpen, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  ArrowLeft,
  Calendar,
  Target,
  Building2,
  BookMarked,
  Heart,
  Lightbulb,
  Users2,
  Wallet
} from "lucide-react";
import { getCommunityBySlug, communitiesData } from "@/lib/communities-data";
import AnimatedSection from "@/components/ui/animated-section";
import Link from "next/link";

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const community = getCommunityBySlug(params.id);
  
  if (!community) {
    return {
      title: "Komunitas Tidak Ditemukan - Lentera Jiwa",
    };
  }
  
  return {
    title: `${community.name} - Komunitas ${community.category} | Lentera Jiwa`,
    description: community.description,
  };
}

// Generate static params for all communities
export async function generateStaticParams() {
  return communitiesData.map((community) => ({
    id: community.slug,
  }));
}

// Helper function to get category icon
const getCategoryIcon = (category: string) => {
  if (category === "Komunitas Anak") return <Users className="w-6 h-6" />;
  if (category === "Komunitas Baca") return <BookOpen className="w-6 h-6" />;
  return <Heart className="w-6 h-6" />;
};

// Helper function to get category color
const getCategoryColor = (category: string) => {
  if (category === "Komunitas Anak") return "bg-orange-100 text-orange-600";
  if (category === "Komunitas Baca") return "bg-teal-100 text-teal-600";
  return "bg-slate-100 text-slate-600";
};

interface DetailSectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const DetailSection = ({ icon, title, children }: DetailSectionProps) => (
  <AnimatedSection>
    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-nara-orange/10 rounded-lg flex items-center justify-center text-nara-orange">
          {icon}
        </div>
        <h2 className="font-serif text-xl font-semibold text-nara-charcoal">{title}</h2>
      </div>
      <div className="text-slate-600 leading-relaxed">
        {children}
      </div>
    </div>
  </AnimatedSection>
);

export default function CommunityDetailPage({ params }: { params: { id: string } }) {
  const community = getCommunityBySlug(params.id);
  
  if (!community) {
    notFound();
  }

  return (
    <div className="bg-nara-paper min-h-screen text-nara-charcoal pb-24">
      {/* Hero Section */}
      <section className="relative bg-nara-charcoal text-white pt-24 pb-16 px-4">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-nara-orange/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back Button */}
          <AnimatedSection>
            <Link 
              href="/?page=komunitas"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Daftar Komunitas</span>
            </Link>
          </AnimatedSection>

          {/* Header Content */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
              {/* Icon */}
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg ${getCategoryColor(community.category)}`}>
                {getCategoryIcon(community.category)}
              </div>
              
              {/* Title & Meta */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-sm font-medium text-nara-orange bg-nara-orange/20 px-3 py-1 rounded-full">
                    {community.category}
                  </span>
                  <span className="text-sm text-white/60">
                    {community.type}
                  </span>
                </div>
                
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {community.name}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    Berdiri {community.since}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users2 className="w-4 h-4" />
                    {community.managers}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg text-white/80 leading-relaxed max-w-3xl">
              {community.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        {/* Biografi & Sejarah */}
        <DetailSection icon={<BookMarked className="w-5 h-5" />} title="Biografi & Sejarah">
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <span className="text-xs font-semibold text-slate-500 uppercase">Pendiri</span>
                <p className="font-medium text-nara-charcoal mt-1">{community.founder}</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <span className="text-xs font-semibold text-slate-500 uppercase">Tahun Berdiri</span>
                <p className="font-medium text-nara-charcoal mt-1">{community.since}</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <span className="text-xs font-semibold text-slate-500 uppercase">Latar Belakang</span>
              <p className="font-medium text-nara-charcoal mt-1">{community.background}</p>
            </div>
          </div>
        </DetailSection>

        {/* Visi & Misi */}
        <DetailSection icon={<Lightbulb className="w-5 h-5" />} title="Visi & Misi">
          <div className="space-y-4">
            <div className="bg-nara-orange/5 border border-nara-orange/20 rounded-lg p-4">
              <span className="text-xs font-semibold text-nara-orange uppercase">Visi</span>
              <p className="font-medium text-nara-charcoal mt-1">{community.vision}</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase">Misi</span>
              <ul className="mt-2 space-y-2">
                {community.mission.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-nara-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </DetailSection>

        {/* Sasaran */}
        <DetailSection icon={<Target className="w-5 h-5" />} title="Sasaran">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-lg p-4">
              <span className="text-xs font-semibold text-slate-500 uppercase">Target Usia</span>
              <p className="font-medium text-nara-charcoal mt-1">{community.targetAge}</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <span className="text-xs font-semibold text-slate-500 uppercase">Target Audience</span>
              <p className="font-medium text-nara-charcoal mt-1">{community.targetAudience}</p>
            </div>
          </div>
        </DetailSection>

        {/* Koleksi */}
        <DetailSection icon={<BookOpen className="w-5 h-5" />} title="Koleksi Buku">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-lg p-4">
              <span className="text-xs font-semibold text-slate-500 uppercase">Jumlah Koleksi</span>
              <p className="font-medium text-nara-charcoal mt-1 text-2xl">{community.collectionCount}</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <span className="text-xs font-semibold text-slate-500 uppercase">Jenis Buku</span>
              <p className="font-medium text-nara-charcoal mt-1">{community.collectionTypes}</p>
            </div>
          </div>
        </DetailSection>

        {/* Fasilitas */}
        <DetailSection icon={<Building2 className="w-5 h-5" />} title="Fasilitas">
          <div className="flex flex-wrap gap-2">
            {community.facilities.map((facility, idx) => (
              <span 
                key={idx}
                className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium"
              >
                {facility}
              </span>
            ))}
          </div>
        </DetailSection>

        {/* Kegiatan */}
        <DetailSection icon={<Heart className="w-5 h-5" />} title="Program & Kegiatan">
          <div className="flex flex-wrap gap-2">
            {community.programs.map((program, idx) => (
              <span 
                key={idx}
                className="bg-nara-orange/10 text-nara-orange border border-nara-orange/20 px-4 py-2 rounded-lg text-sm font-medium"
              >
                {program}
              </span>
            ))}
          </div>
        </DetailSection>

        {/* Pendanaan */}
        <DetailSection icon={<Wallet className="w-5 h-5" />} title="Pendanaan">
          <div className="bg-slate-50 rounded-lg p-4">
            <span className="text-xs font-semibold text-slate-500 uppercase">Sumber Dana</span>
            <p className="font-medium text-nara-charcoal mt-1">{community.fundingSource}</p>
          </div>
        </DetailSection>

        {/* Pengelola */}
        <DetailSection icon={<Users className="w-5 h-5" />} title="Pengelola">
          <div className="bg-slate-50 rounded-lg p-4">
            <span className="text-xs font-semibold text-slate-500 uppercase">Tim Pengelola</span>
            <p className="font-medium text-nara-charcoal mt-1">{community.managers}</p>
          </div>
        </DetailSection>

        {/* CTA Section */}
        <AnimatedSection delay={0.2}>
          <div className="bg-nara-charcoal rounded-2xl p-8 text-white text-center mt-12">
            <h3 className="font-serif text-2xl font-semibold mb-4">
              Tertarik dengan {community.name}?
            </h3>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">
              Hubungi komunitas ini untuk informasi lebih lanjut tentang program dan kegiatan yang tersedia.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 h-[48px] flex items-center justify-center bg-nara-orange text-white font-medium rounded-lg hover:bg-orange-600 transition-colors w-full sm:w-auto">
                <Phone className="w-4 h-4 mr-2" />
                Hubungi via WhatsApp
              </button>
              <button className="px-8 h-[48px] flex items-center justify-center bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors w-full sm:w-auto">
                <MapPin className="w-4 h-4 mr-2" />
                Lihat Lokasi
              </button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
