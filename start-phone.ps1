$ErrorActionPreference = 'Stop'
$appDirectory = $PSScriptRoot
$nodeExecutable = (Get-Command node -ErrorAction Stop).Source
$serverScript = Join-Path $appDirectory 'serve.cjs'
$serverArguments = '"' + $serverScript + '" 0.0.0.0 8765'
try {
    $health = Invoke-RestMethod -Uri 'http://127.0.0.1:8765/health' -TimeoutSec 2
    if ($health.app -eq 'care-medicine-52') {
        Write-Output 'The medicine app is already running on port 8765.'
        exit 0
    }
    throw 'Port 8765 is in use by another service.'
} catch {
    if ($_.Exception.Message -eq 'Port 8765 is in use by another service.') { throw }
}
$serverProcess = Start-Process -FilePath $nodeExecutable -ArgumentList $serverArguments -WorkingDirectory $appDirectory -WindowStyle Hidden -RedirectStandardOutput (Join-Path $appDirectory 'phone-server.log') -RedirectStandardError (Join-Path $appDirectory 'phone-server-error.log') -PassThru
Write-Output ('Started medicine app, process ' + $serverProcess.Id + ', port 8765.')
