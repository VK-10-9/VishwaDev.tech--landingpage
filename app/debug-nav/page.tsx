import { navigationItems } from "@/src/constants/navigation";

export default function DebugNavPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Navigation Debug</h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Total Navigation Items: {navigationItems.length}</h2>
          </div>
          
          {navigationItems.map((item, index) => (
            <div key={index} className="border border-border rounded-lg p-4">
              <div className="flex items-center gap-4 mb-2">
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                {item.href && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                    Direct Link: {item.href}
                  </span>
                )}
              </div>
              
              {item.description && (
                <p className="text-muted-foreground mb-2">{item.description}</p>
              )}
              
              {item.items && (
                <div className="ml-4 mt-3">
                  <p className="text-sm font-medium mb-2">Sub-items ({item.items.length}):</p>
                  <div className="space-y-1">
                    {item.items.map((subItem, subIndex) => (
                      <div key={subIndex} className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-muted rounded-full"></span>
                        <span>{subItem.title}</span>
                        <span className="text-muted-foreground">→ {subItem.href}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <div className="mt-8 p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Summary:</h3>
            <ul className="space-y-1 text-sm">
              <li>• Main navigation items: {navigationItems.length}</li>
              <li>• Direct links: {navigationItems.filter(item => item.href).length}</li>
              <li>• Dropdown menus: {navigationItems.filter(item => item.items).length}</li>
              <li>• Total sub-links: {navigationItems.reduce((acc, item) => acc + (item.items?.length || 0), 0)}</li>
              <li>• Total clickable items: {navigationItems.length + navigationItems.reduce((acc, item) => acc + (item.items?.length || 0), 0)}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
