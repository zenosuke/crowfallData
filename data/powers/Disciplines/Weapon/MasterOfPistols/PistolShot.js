exports.power = {
  name: "Pistol Shot",
  source: "Master of Pistols",
  type: "Ranged Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Ray",
  max_targets: 1,
  range: 15,
  next_chain: ["Pistol Shot 2"],
  cost: {
    pips: 0,
    resource: 9
  },
  tooltip: "Shoot an enemy for 35 - 52 + 43% Weapon Damage while generating a Pip with a chance to reset the cooldown of Rapid Fire.",
  icon: ""
};
