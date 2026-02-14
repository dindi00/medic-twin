export function analyzeLabs(labs: any) {
  const highlights = [];

  if (labs.LDL > 160 || labs.HDL < 40) {
    highlights.push({
      organ: "heart",
      color: "yellow",
      severity: "moderate",
      explanation: "Your cholesterol levels suggest increased cardiovascular risk.",
      eli5: "Your heart’s blood pipes may slowly get clogged."
    });
  }

  if (labs.ALT > 55 || labs.AST > 50) {
    highlights.push({
      organ: "liver",
      color: "red",
      severity: "high",
      explanation: "Elevated liver enzymes indicate possible liver stress.",
      eli5: "Your liver is working too hard cleaning your body."
    });
  }

  if (labs.Iron < 50 || labs.Hemoglobin < 12) {
    highlights.push({
      organ: "bone",
      color: "blue",
      severity: "moderate",
      explanation: "Low iron may indicate anemia risk.",
      eli5: "Your body may not have enough strong red blood cells."
    });
  }

  return highlights;
}