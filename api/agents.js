// api/agents.js
import { readFileSync } from 'fs';
import { join }         from 'path';

export default function handler(req, res) {
  // load our sample data
  const filePath = join(process.cwd(), 'data', 'agents.json');
  const raw      = readFileSync(filePath, 'utf8');
  const agents   = JSON.parse(raw);

  // map to API shape
  const payload = agents.map((a, i) => {
    const google = parseFloat(a.google_rating);
    const tp     = parseFloat(a.trustpilot_rating);
    const avg    = (google + tp) / 2;
    let risk;
    if (avg >= 4)      risk = 'Low';
    else if (avg >= 3) risk = 'Medium';
    else               risk = 'High';

    return {
      id:                i + 1,
      name:              a.name,
      location:          a.location,
      imageUrl:          a.image,
      googleRating:      google,
      trustpilotRating:  tp,
      riskLevel:         risk
    };
  });

  @@ export default function handler(req, res) {
-  res.status(200).json(payload);
+  // Allow any web page to fetch this JSON
+  res.setHeader('Access-Control-Allow-Origin', '*');
+  res.setHeader('Access-Control-Allow-Methods', 'GET');
+  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
+  res.status(200).json(payload);
}
}
