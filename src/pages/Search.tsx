
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search as SearchIcon, MapPin, Hotel, SlidersHorizontal, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LocationCard from '@/components/LocationCard';
import { locations, Location } from '@/data/locations';

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [locationType, setLocationType] = useState<'all' | 'temple' | 'hotel'>('all');
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  
  // Tags for filtering
  const allTags = Array.from(new Set(locations.flatMap(loc => loc.tags)));
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  useEffect(() => {
    // Extract type from URL parameters
    const params = new URLSearchParams(location.search);
    const typeParam = params.get('type');
    if (typeParam === 'temple' || typeParam === 'hotel') {
      setLocationType(typeParam);
    } else {
      setLocationType('all');
    }
    
    // Extract search query from URL parameters
    const queryParam = params.get('q');
    if (queryParam) {
      setSearchQuery(queryParam);
    }
  }, [location.search]);
  
  // Filter locations based on search, type, and tags
  useEffect(() => {
    let filtered = [...locations];
    
    // Filter by type
    if (locationType !== 'all') {
      filtered = filtered.filter(loc => loc.type === locationType);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(loc => 
        loc.name.toLowerCase().includes(query) ||
        loc.description.toLowerCase().includes(query) ||
        loc.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Filter by selected tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(loc => 
        selectedTags.some(tag => loc.tags.includes(tag))
      );
    }
    
    setFilteredLocations(filtered);
  }, [locationType, searchQuery, selectedTags]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Update URL with search parameters
    const params = new URLSearchParams();
    if (locationType !== 'all') {
      params.set('type', locationType);
    }
    if (searchQuery) {
      params.set('q', searchQuery);
    }
    
    navigate({ search: params.toString() });
  };
  
  const handleTypeChange = (type: 'all' | 'temple' | 'hotel') => {
    setLocationType(type);
    
    // Update URL with type parameter
    const params = new URLSearchParams(location.search);
    if (type !== 'all') {
      params.set('type', type);
    } else {
      params.delete('type');
    }
    
    navigate({ search: params.toString() });
  };
  
  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };
  
  const clearFilters = () => {
    setSearchQuery('');
    setLocationType('all');
    setSelectedTags([]);
    navigate('/search');
  };

  return (
    <div className="min-h-screen bg-mathura-background">
      <Navbar />
      
      <div className="pt-24">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-mathura-dark md:text-4xl"
              >
                {locationType === 'temple' ? 'Temples' : 
                 locationType === 'hotel' ? 'Hotels' : 'Search'}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-mathura-text/70"
              >
                {locationType === 'temple' ? 'Discover the divine temples of Mathura' : 
                 locationType === 'hotel' ? 'Find the perfect place to stay' : 
                 'Explore temples and hotels in Mathura'}
              </motion.p>
            </div>
          
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSearch}
              className="flex w-full max-w-md gap-2 md:w-auto"
            >
              <div className="relative flex-grow">
                <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-mathura-text/50" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for temples, hotels..."
                  className="w-full rounded-lg border-0 bg-white pl-10 pr-4 py-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-mathura-accent"
                />
              </div>
              <button
                type="button"
                onClick={() => setShowFilterMenu(!showFilterMenu)}
                className="flex items-center justify-center rounded-lg bg-white p-2 shadow-sm ring-1 ring-inset ring-gray-300"
                aria-label="Toggle filters"
              >
                <SlidersHorizontal className="h-5 w-5 text-mathura-text/70" />
              </button>
            </motion.form>
          </div>
          
          {/* Filter & Sort Section */}
          <AnimatePresence>
            {showFilterMenu && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-8 overflow-hidden rounded-lg bg-white p-6 shadow-md"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium">Filters</h2>
                  <button
                    onClick={() => setShowFilterMenu(false)}
                    className="rounded-full p-1 text-mathura-text/70 transition-colors hover:bg-mathura-muted"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="mb-6">
                  <h3 className="mb-2 font-medium">Property Type</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleTypeChange('all')}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        locationType === 'all'
                          ? 'bg-mathura-accent text-white'
                          : 'bg-mathura-muted text-mathura-text hover:bg-mathura-muted/70'
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => handleTypeChange('temple')}
                      className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        locationType === 'temple'
                          ? 'bg-mathura-accent text-white'
                          : 'bg-mathura-muted text-mathura-text hover:bg-mathura-muted/70'
                      }`}
                    >
                      <MapPin className="h-4 w-4" />
                      Temples
                    </button>
                    <button
                      onClick={() => handleTypeChange('hotel')}
                      className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        locationType === 'hotel'
                          ? 'bg-mathura-accent text-white'
                          : 'bg-mathura-muted text-mathura-text hover:bg-mathura-muted/70'
                      }`}
                    >
                      <Hotel className="h-4 w-4" />
                      Hotels
                    </button>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="mb-2 font-medium">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => handleTagToggle(tag)}
                        className={`rounded-full px-3 py-1 text-sm font-medium capitalize transition-colors ${
                          selectedTags.includes(tag)
                            ? 'bg-mathura-accent text-white'
                            : 'bg-mathura-muted text-mathura-text hover:bg-mathura-muted/70'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                
                {(searchQuery || locationType !== 'all' || selectedTags.length > 0) && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-1 text-sm text-mathura-accent hover:underline"
                  >
                    <X className="h-4 w-4" />
                    Clear all filters
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Results Section */}
          <div className="mb-4 flex items-center justify-between">
            <p className="text-mathura-text/70">
              {filteredLocations.length} {filteredLocations.length === 1 ? 'result' : 'results'} found
            </p>
          </div>
          
          {filteredLocations.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredLocations.map((loc, index) => (
                <LocationCard key={loc.id} location={loc} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <div className="mb-4 rounded-full bg-mathura-muted p-4">
                <SearchIcon className="h-8 w-8 text-mathura-text/50" />
              </div>
              <h3 className="mb-2 text-xl font-medium">No results found</h3>
              <p className="max-w-md text-mathura-text/70">
                We couldn't find any matches for your search. Try adjusting your filters or search terms.
              </p>
              <button
                onClick={clearFilters}
                className="mt-6 rounded-full bg-mathura-accent px-6 py-2 font-medium text-white transition-colors hover:bg-mathura-accent/90"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Search;
