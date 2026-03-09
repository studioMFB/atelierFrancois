import { PlannerSectionPanel } from '@/components/planner/PlannerSectionPanel'
import { getPaletteBadge } from '@/components/planner/plannerUtils'
import {
  plannerPaletteItemsByTab,
  plannerPaletteTabs,
  type PlannerPaletteTab
} from '@/data/plannerPalette'
import { ProductViewer } from '@/components/shop/ProductViewer'

interface PlannerPalettePanelProps {
  activeAssetKey: string | null
  onAssetSelect: (assetKey: string) => void
  onPaletteTabChange: (tab: PlannerPaletteTab) => void
  onToggle: (open: boolean) => void
  open: boolean
  paletteTab: PlannerPaletteTab
}

export function PlannerPalettePanel({
  activeAssetKey,
  onAssetSelect,
  onPaletteTabChange,
  onToggle,
  open,
  paletteTab
}: PlannerPalettePanelProps) {
  const visiblePaletteItems = plannerPaletteItemsByTab[paletteTab]

  return (
    <PlannerSectionPanel
      className="planner-panel--palette"
      onToggle={onToggle}
      open={open}
      title="Palette"
    >
      <div className="toggle-row planner-tab-row">
        {plannerPaletteTabs.map((tab) => (
          <button
            className={`toggle-row__button ${
              paletteTab === tab.value ? 'toggle-row__button--active' : ''
            }`}
            key={tab.value}
            onClick={() => {
              onPaletteTabChange(tab.value)
              const nextFirstItem = plannerPaletteItemsByTab[tab.value][0]
              if (nextFirstItem) {
                onAssetSelect(nextFirstItem.assetKey)
              }
            }}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="muted-copy planner-tab-copy">
        {plannerPaletteTabs.find((tab) => tab.value === paletteTab)?.description}
      </p>
      <div className="planner-palette planner-palette--scroll">
        {visiblePaletteItems.map((item) => (
          <button
            className={`planner-chip ${activeAssetKey === item.assetKey ? 'planner-chip--active' : ''}`}
            key={item.assetKey}
            onClick={() => onAssetSelect(item.assetKey)}
            type="button"
          >
            <div className="planner-chip__thumb">
              <ProductViewer assetKey={item.assetKey} compact preset="garden" />
            </div>
            <div className="planner-chip__copy">
              <strong>{item.name}</strong>
              <small>{item.description}</small>
            </div>
            <span>
              {item.price != null ? `£${item.price.toFixed(0)}` : getPaletteBadge(item.tab)}
            </span>
          </button>
        ))}
      </div>
    </PlannerSectionPanel>
  )
}
