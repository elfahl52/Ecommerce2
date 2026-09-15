import Category from '../Category/Category'
import Category2 from '../Category/Category2'
import PageShell from './PageShell'

const CategoriesPage = () => (
  <PageShell
    eyebrow="Browse categories"
    title="Find the right fit for your lifestyle"
    description="From audio and smart devices to everyday accessories, our categories make it easy to explore products that match your needs."
  >
    <div className="space-y-8">
      <Category />
      <Category2 />
    </div>
  </PageShell>
)

export default CategoriesPage
