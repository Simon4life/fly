// import TopNavbar from "../components/TopNavbar";
import FilterBar from "../components/FilterBar.jsx";
// import FeaturedHistoryCard from "../components/FeaturedHistoryCard";
import HistoryCard from "../components/HistoryCard.jsx";
// import HistoryListItem from "../components/HistoryListItem";
// import FloatingActionButton from "../components/FloatingActionButton";
const historyData = [
  {
    id: 1,
    img: "https://assets.foxnews.com/liveblog/fn/prod/images/2026/07/9b0d04695ec58c1795ac33b64cd088bd.jpg",
    category: "Tech",
    title: "The Rise of AI: How Artificial Intelligence is Changing the World",
    excerpt: "Artificial Intelligence (AI) is no longer a concept of the future; it's here, and it's transforming industries across the globe. From healthcare to finance, AI is revolutionizing the way we work and live.",
    readTime: "5 min",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    img: "https://assets.foxnews.com/liveblog/fn/prod/images/2026/07/9b0d04695ec58c1795ac33b64cd088bd.jpg",
    category: "Science",
    title: "Exploring the Mysteries of the Universe: A Journey Through Space",
    excerpt: "Space exploration has always fascinated humanity. From the first moon landing to the latest Mars rover missions, our quest to understand the cosmos continues to push the boundaries of science and technology.",
    readTime: "7 min",
    timestamp: "5 hours ago",
  },
  {
    id: 3,
    img: "https://assets.foxnews.com/liveblog/fn/prod/images/2026/07/9b0d04695ec58c1795ac33b64cd088bd.jpg",
    category: "Finance",
    title: "The Future of Cryptocurrency: Trends and Predictions for 2024",
    excerpt: "Cryptocurrency has taken the financial world by storm. As we look ahead to 2024, experts predict significant developments in blockchain technology, regulatory frameworks, and market adoption that could shape the future of digital currencies.",
    readTime: "6 min",
    timestamp: "1 day ago",
  },
]

export default function History() {
  return (
    <main className="md:ml-15 min-h-screen">
      <div className="px-4 py-8">
        <div className="mb-12">
          <h2 className="text-4xl mb-4 font-extrabold font-display text-black dark:text-white tracking-tight">
            History
          </h2>

          <p className="text-black text-xl dark:text-white leading-relaxed max-w-xl">
            Review your personalized knowledge library. Every summary you've
            read, indexed by time and intelligence category.
          </p>
        </div>

        <FilterBar />

        {/* Today */}
        <section className="mb-16">
          {
            historyData.map((item) => (
              <HistoryCard
                key={item.id}
                img={item.img}
                category={item.category}
                title={item.title}
                excerpt={item.excerpt}
                readTime={item.readTime}
                timestamp={item.timestamp}
              />
            ))

          }
        </section>
      </div>
    </main>
  );
}