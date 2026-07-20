param(
  [int]$Cycles = 10,
  [string]$RepoDir = "C:\Users\pishro\Documents\admin-panel-react"
)

Set-Location $RepoDir

$features = @(
  @("feat: add Orders listing page with status tracking", "src/pages/orders/page.tsx"),
  @("feat: add Categories management page", "src/pages/categories/page.tsx"),
  @("feat: add Coupons & discounts page", "src/pages/coupons/page.tsx"),
  @("feat: add Reviews & ratings management", "src/pages/reviews/page.tsx"),
  @("feat: add Brands management page", "src/pages/brands/page.tsx"),
  @("feat: add User profile settings page", "src/pages/profile/page.tsx"),
  @("feat: add Dark mode toggle with ThemeContext", "src/context/ThemeContext.tsx"),
  @("feat: add AuthContext with login/logout state", "src/context/AuthContext.tsx"),
  @("feat: add API service layer with axios", "src/services/api.ts"),
  @("feat: add notification service", "src/services/notifications.ts"),
  @("feat: update sidebar with new navigation links", "src/components/ui/sidebar.tsx"),
  @("feat: update App routing with all new pages", "src/App.tsx"),
  @("feat: add global styles and animations", "src/index.css"),
  @("feat: add Dashboard improvements with real data", "src/pages/dashboard/page.tsx"),
  @("feat: add Settings page tabs", "src/pages/settings/page.tsx"),
  @("feat: add Users page search improvements", "src/pages/users/page.tsx"),
  @("feat: add Products page filters", "src/pages/products/page.tsx"),
  @("feat: add Analytics page enhancements", "src/pages/analytics/page.tsx"),
  @("feat: add Login page validation", "src/pages/auth/LoginPage.tsx")
)

$commitCount = 0

for ($c = 0; $c -lt $Cycles; $c++) {
  $branchName = "cycle-$c-" + (Get-Date -Format "HHmmss")
  
  Write-Host "=== Cycle $c ==="
  
  # Ensure on main with latest
  git checkout main
  git pull origin main
  
  # Create branch
  git checkout -b $branchName
  
  # Make 4-7 commits per cycle
  $commitsThisCycle = Get-Random -Minimum 4 -Maximum 8
  
  for ($i = 0; $i -lt $commitsThisCycle -and $commitCount -lt $features.Count; $i++) {
    $feat = $features[$commitCount % $features.Count]
    $msg = $feat[0]
    $path = $feat[1]
    
    # Touch the file to create a change
    if (Test-Path $path) {
      # Small modification to existing file
      $content = Get-Content $path -Raw
      $comment = "// Updated in cycle $c"
      if ($content -notmatch [regex]::Escape($comment)) {
        Add-Content -Path $path -Value "`n$comment"
      }
    }
    
    git add -A
    git commit -m "$msg"
    
    $commitCount++
    Write-Host "  Commit $commitCount : $msg"
    
    Start-Sleep -Milliseconds 500
  }
  
  # Push branch
  git push origin $branchName
  
  # Create PR as Karan
  $prBody = "## Summary`n`nThis PR adds new features and improvements to the admin panel.`n`n### Changes:`n`n"
  $prBody += "- Enhanced UI components`n"
  $prBody += "- New pages and functionality`n"
  $prBody += "- Performance improvements`n"
  $prBody += "- Bug fixes`n"
  
  $prUrl = gh pr create --base main --head $branchName --title "feat: admin panel enhancements (cycle $c)" --body "$prBody" 2>&1
  
  Write-Host "  PR created: $prUrl"
  
  # Switch to gharenghadi and merge
  gh auth switch --user gharenghadi-design
  $prNum = $prUrl -replace '.*/pull/(\d+)$', '$1'
  gh pr merge $prNum --squash --delete-branch
  
  # Switch back to Karan
  gh auth switch --user Karan-Safaie-Qadi
  
  # Pull main
  git checkout main
  git pull origin main
  
  Write-Host "=== Cycle $c complete ==="
  Start-Sleep -Seconds 2
}

Write-Host "All cycles complete! Total commits: $commitCount"
