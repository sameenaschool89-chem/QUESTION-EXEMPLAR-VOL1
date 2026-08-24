// NCERT Exemplar Chemistry Class 12 MCQ Database
// Chapter list: Unit 2 (Solutions), Unit 3 (Electrochemistry), Unit 4 (Chemical Kinetics), Unit 8 (d & f Block), Unit 9 (Coordination Compounds)

const CHEMISTRY_QUIZ_DATA = [
  {
    id: "solutions",
    title: "Unit 2: Solutions",
    description: "Master liquid solutions, Raoult's law, Henry's law, colligative properties, and Van 't Hoff factors.",
    questions: [
      {
        id: "sol_q1",
        type: "single",
        text: "Which of the following units is useful in relating concentration of solution with its vapour pressure?",
        options: [
          "Mole fraction",
          "Parts per million",
          "Mass percentage",
          "Molality"
        ],
        correct: 0,
        explanation: "According to Raoult's law, the vapour pressure of a solution of non-volatile solute is directly proportional to the mole fraction of the solvent. Hence, mole fraction is useful in relating concentration with vapour pressure."
      },
      {
        id: "sol_q2",
        type: "single",
        text: "On dissolving sugar in water at room temperature, the solution feels cool to touch. Under which of the following cases will the dissolution of sugar be most rapid?",
        options: [
          "Sugar crystals in cold water",
          "Sugar crystals in hot water",
          "Powdered sugar in cold water",
          "Powdered sugar in hot water"
        ],
        correct: 3,
        explanation: "Dissolution of sugar feels cool, meaning the process is endothermic (ΔH > 0). According to Le Chatelier's principle, solubility increases with temperature. Furthermore, powdered sugar has a larger surface area than crystals, increasing the rate of dissolution."
      },
      {
        id: "sol_q3",
        type: "single",
        text: "At equilibrium, the rate of dissolution of a solid solute in a volatile liquid solvent is:",
        options: [
          "Less than the rate of crystallisation",
          "Greater than the rate of crystallisation",
          "Equal to the rate of crystallisation",
          "Zero"
        ],
        correct: 2,
        explanation: "At dynamic equilibrium, the rate of solute entering the solution (dissolution) equals the rate of solute leaving the solution (crystallisation)."
      },
      {
        id: "sol_q4",
        type: "single",
        text: "A beaker contains a solution of substance 'A'. Precipitation of substance 'A' takes place when a small amount of 'A' is added to the solution. The original solution was:",
        options: [
          "Saturated",
          "Supersaturated",
          "Unsaturated",
          "Concentrated"
        ],
        correct: 1,
        explanation: "If a solution is supersaturated, it contains more solute than its solubility limit at that temperature. Adding a seed crystal of the solute triggers rapid precipitation of the excess solute."
      },
      {
        id: "sol_q5",
        type: "single",
        text: "The maximum amount of a solid solute that can be dissolved in a specified amount of a given liquid solvent does not depend upon:",
        options: [
          "Temperature",
          "Nature of solute",
          "Pressure",
          "Nature of solvent"
        ],
        correct: 2,
        explanation: "Pressure has practically no effect on the solubility of solids in liquids because solids and liquids are highly incompressible."
      },
      {
        id: "sol_q6",
        type: "single",
        text: "Low concentration of oxygen in the blood and tissues of people living at high altitudes is due to:",
        options: [
          "Low temperature",
          "Low atmospheric pressure",
          "High atmospheric pressure",
          "Both low temperature and high atmospheric pressure"
        ],
        correct: 1,
        explanation: "According to Henry's law, the solubility of a gas is directly proportional to its partial pressure. At high altitudes, the atmospheric pressure is low, meaning the partial pressure of oxygen is low, which decreases oxygen solubility in the blood."
      },
      {
        id: "sol_q7",
        type: "single",
        text: "Considering the formation, breaking and strength of hydrogen bonds, predict which of the following mixtures will show a positive deviation from Raoult's law.",
        options: [
          "Methanol and acetone",
          "Chloroform and acetone",
          "Nitric acid and water",
          "Phenol and aniline"
        ],
        correct: 0,
        explanation: "In pure methanol, molecules are hydrogen-bonded. On adding acetone, acetone molecules slip in between methanol molecules and break some hydrogen bonds, weakening solute-solvent interactions (A-B interactions). This leads to positive deviation."
      },
      {
        id: "sol_q8",
        type: "single",
        text: "Colligative properties depend on:",
        options: [
          "The nature of the solute particles dissolved in solution.",
          "The number of solute particles in solution.",
          "The physical properties of the solute particles dissolved in solution.",
          "The nature of solvent particles."
        ],
        correct: 1,
        explanation: "Colligative properties are properties of solutions that depend solely on the ratio of the number of solute particles to the number of solvent molecules in a solution, and not on the nature of the chemical species present."
      },
      {
        id: "sol_q9",
        type: "single",
        text: "Which of the following aqueous solutions should have the highest boiling point?",
        options: [
          "1.0 M NaOH",
          "1.0 M Na2SO4",
          "1.0 M NH4NO3",
          "1.0 M KNO3"
        ],
        correct: 1,
        explanation: "Boiling point elevation is a colligative property. Na2SO4 dissociates into 3 ions (2 Na+ and 1 SO4^2-), giving a Van 't Hoff factor i ≈ 3. The others dissociate into only 2 ions (i ≈ 2). Hence, Na2SO4 provides the highest particle concentration and boiling point."
      },
      {
        id: "sol_q10",
        type: "single",
        text: "The unit of ebulioscopic constant (Kb) is:",
        options: [
          "K kg mol⁻¹ or K (molality)⁻¹",
          "mol kg K⁻¹ or K⁻¹(molality)",
          "kg mol⁻¹ K⁻¹ or K⁻¹(molality)⁻¹",
          "K mol kg⁻¹ or K (molality)"
        ],
        correct: 0,
        explanation: "Since ΔTb = Kb * m, then Kb = ΔTb / m. The unit of temperature is Kelvin (K) and molality is mol/kg. Therefore, Kb has units of K kg mol⁻¹."
      },
      {
        id: "sol_q27",
        type: "multiple",
        text: "Which of the following factors affect the solubility of a gaseous solute in a fixed volume of liquid solvent? (Select all correct options)",
        options: [
          "Nature of solute and temperature at constant pressure",
          "Nature of solute and pressure at constant temperature",
          "Temperature and pressure only",
          "Pressure only"
        ],
        correct: [0, 1],
        explanation: "Solubility of a gas in a liquid depends on the nature of the gas and solvent, temperature, and pressure. (i) is correct as temperature affects solubility at constant P, and (ii) is correct as pressure affects solubility at constant T (Henry's Law)."
      },
      {
        id: "sol_q51",
        type: "assertion-reason",
        text: "Evaluate the assertion and reason statements below.",
        assertion: "Molarity of a solution in liquid state changes with temperature.",
        reason: "The volume of a solution changes with change in temperature.",
        correct: 0,
        explanation: "Molarity is defined as moles of solute per litre of solution. Since volume changes with temperature, molarity is temperature-dependent. The reason correctly explains the assertion."
      },
      {
        id: "sol_q52",
        type: "assertion-reason",
        text: "Evaluate the assertion and reason statements below.",
        assertion: "When methyl alcohol is added to water, the boiling point of water increases.",
        reason: "When a volatile solute is added to a volatile solvent, elevation in boiling point is observed.",
        correct: 3,
        explanation: "Methyl alcohol is highly volatile compared to water. Adding a volatile solute like methanol increases the total vapour pressure, lowering the boiling point of the solution rather than raising it. Thus, both assertion and reason are incorrect."
      },
      {
        id: "sol_q53",
        type: "assertion-reason",
        text: "Evaluate the assertion and reason statements below.",
        assertion: "When NaCl is added to water, a depression in freezing point is observed.",
        reason: "The lowering of vapour pressure of a solution causes depression in the freezing point.",
        correct: 0,
        explanation: "NaCl is a non-volatile solute. Adding it to water lowers the vapour pressure. The freezing point is the temperature at which the solid and liquid phases have the same vapour pressure; since vapour pressure is lowered, the freezing point is depressed. Both statements are true and the reason is the correct explanation."
      },
      {
        id: "sol_q54",
        type: "assertion-reason",
        text: "Evaluate the assertion and reason statements below.",
        assertion: "When a solution is separated from the pure solvent by a semipermeable membrane, the solvent molecules pass through it from the pure solvent side to the solution side.",
        reason: "Diffusion of solvent occurs from a region of high concentration solution to a region of low concentration solution.",
        correct: 1,
        explanation: "The assertion is correct; solvent flows from low solute concentration (pure solvent) to high solute concentration (solution) side during osmosis. The reason statement says diffusion occurs from high to low concentration solution, which is correct, but it does not explain why solvent molecules move across the membrane in this direction. Hence, both are true but the reason is not the correct explanation."
      }
    ]
  },
  {
    id: "electrochemistry",
    title: "Unit 3: Electrochemistry",
    description: "Master electrochemical cells, Nernst equation, electrolytic conductance, Faraday's laws, and batteries.",
    questions: [
      {
        id: "elec_q1",
        type: "single",
        text: "Which of the following cell configurations will measure the standard electrode potential of a copper electrode?",
        options: [
          "Pt(s) | H2(g, 0.1 bar) | H+(aq., 1 M) || Cu²+(aq., 1 M) | Cu",
          "Pt(s) | H2(g, 1 bar) | H+(aq., 1 M) || Cu²+(aq., 2 M) | Cu",
          "Pt(s) | H2(g, 1 bar) | H+(aq., 1 M) || Cu²+(aq., 1 M) | Cu",
          "Pt(s) | H2(g, 1 bar) | H+(aq., 0.1 M) || Cu²+(aq., 1 M) | Cu"
        ],
        correct: 2,
        explanation: "The standard electrode potential is measured under standard conditions: 1 bar pressure for gas solutes and 1 M concentration for ionic solutions. Therefore, standard hydrogen electrode (1 bar, 1 M H+) coupled with copper electrode (1 M Cu²+) is required."
      },
      {
        id: "elec_q2",
        type: "single",
        text: "The electrode potential for a Mg electrode varies according to the equation: E_Mg²⁺|Mg = E°_Mg²⁺|Mg - (0.059/2) * log(1/[Mg²⁺]). Which graph correctly represents E_Mg²⁺|Mg vs log [Mg²⁺]?",
        options: [
          "A curved line bending upwards.",
          "A straight line with a positive slope.",
          "A curved line bending downwards.",
          "A straight line with a negative slope."
        ],
        correct: 1,
        explanation: "Rewriting the Nernst equation: E = E° + (0.059/2) * log [Mg²⁺]. This is in the linear form y = mx + c with slope m = +0.059/2 (positive). Thus, the graph is a straight line with a positive slope."
      },
      {
        id: "elec_q3",
        type: "single",
        text: "Which of the following statements is correct?",
        options: [
          "E_Cell and ΔrG of cell reaction are both extensive properties.",
          "E_Cell and ΔrG of cell reaction are both intensive properties.",
          "E_Cell is an intensive property while ΔrG of cell reaction is an extensive property.",
          "E_Cell is an extensive property while ΔrG of cell reaction is an intensive property."
        ],
        correct: 2,
        explanation: "E_Cell (electrode potential) does not depend on the quantity of matter and is therefore an intensive property. ΔrG (Gibbs free energy change) depends on the stoichiometric coefficient n (ΔG = -nFE) and is an extensive property."
      },
      {
        id: "elec_q4",
        type: "single",
        text: "The difference between the electrode potentials of two electrodes when no current is drawn through the cell is called:",
        options: [
          "Cell potential",
          "Cell electromotive force (emf)",
          "Potential difference",
          "Cell voltage"
        ],
        correct: 1,
        explanation: "The potential difference of a cell is called the cell electromotive force (emf) when no current is drawn through the circuit."
      },
      {
        id: "elec_q5",
        type: "single",
        text: "Which of the following statements is NOT correct about an inert electrode in an electrochemical cell?",
        options: [
          "It does not participate in the cell chemical reaction.",
          "It provides a surface either for oxidation or for reduction.",
          "It provides a surface for the conduction of electrons.",
          "It provides a surface for the redox reaction to take place."
        ],
        correct: 3,
        explanation: "An inert electrode (like Pt or Au) does not participate in the chemical reaction and does not provide a surface for the redox reaction; it only conducts electrons and provides a solid surface for half-reactions (like hydrogen gas oxidation/reduction)."
      },
      {
        id: "elec_q6",
        type: "single",
        text: "An electrochemical cell can behave like an electrolytic cell when:",
        options: [
          "E_cell = 0",
          "E_cell > E_ext",
          "E_ext > E_cell",
          "E_cell = E_ext"
        ],
        correct: 2,
        explanation: "When an external opposing voltage (E_ext) greater than the cell's potential (E_cell) is applied, the direction of current is reversed and the cell functions as an electrolytic cell, consuming electrical energy to drive a non-spontaneous reaction."
      },
      {
        id: "elec_q7",
        type: "single",
        text: "Which of the statements about solutions of electrolytes is NOT correct?",
        options: [
          "Conductivity of the solution depends on the size of the ions.",
          "Conductivity depends upon the viscosity of the solvent.",
          "Conductivity does not depend upon the solvation of ions present in the solution.",
          "Conductivity of the solution increases with temperature."
        ],
        correct: 2,
        explanation: "Conductivity depends heavily on ionic mobility. Larger hydrated radii due to high solvation restrict mobility, lowering conductivity. Thus, conductivity does depend on the solvation of ions."
      },
      {
        id: "elec_q8",
        type: "single",
        text: "Using the following standard reduction potential data, identify the strongest reducing agent:\nE°(Cr2O7²⁻/Cr³⁺) = 1.33 V, E°(Cl2/Cl⁻) = 1.36 V, E°(MnO4⁻/Mn²⁺) = 1.51 V, E°(Cr³⁺/Cr) = -0.74 V.",
        options: [
          "Cl⁻",
          "Cr",
          "Cr³⁺",
          "Mn²⁺"
        ],
        correct: 1,
        explanation: "The strongest reducing agent is the species that is most easily oxidised, which corresponds to the lowest standard reduction potential. E°(Cr³⁺/Cr) = -0.74 V is the lowest, meaning Cr metal is the strongest reducing agent."
      },
      {
        id: "elec_q18",
        type: "multiple",
        text: "The positive value of the standard electrode potential of the Cu²⁺/Cu couple (+0.34 V) indicates that: (Select all correct options)",
        options: [
          "This redox couple is a stronger reducing agent than the H⁺/H2 couple.",
          "This redox couple is a stronger oxidising agent than the H⁺/H2 couple.",
          "Copper metal can displace hydrogen gas from dilute acids.",
          "Copper metal cannot displace hydrogen gas from dilute acids."
        ],
        correct: [1, 3],
        explanation: "A positive standard reduction potential (+0.34 V relative to SHE) means Cu²⁺ is more easily reduced than H⁺, making the couple a stronger oxidising agent. Consequently, copper metal is stable in acids and cannot displace hydrogen gas."
      },
      {
        id: "elec_q56",
        type: "assertion-reason",
        text: "Evaluate the assertion and reason statements below.",
        assertion: "Copper (Cu) is less reactive than hydrogen.",
        reason: "E°_Cu²⁺|Cu is negative.",
        correct: 2,
        explanation: "Copper is less reactive than hydrogen (Assertion is true). However, its standard reduction potential E°_Cu²⁺|Cu is positive (+0.34 V), not negative (Reason is false)."
      },
      {
        id: "elec_q57",
        type: "assertion-reason",
        text: "Evaluate the assertion and reason statements below.",
        assertion: "E_Cell must have a positive value for the cell to function.",
        reason: "E_cathode < E_anode.",
        correct: 2,
        explanation: "For a cell to be spontaneous (function as a galvanic cell), ΔG must be negative, meaning E_cell must be positive (Assertion is true). However, E_cell = E_cathode - E_anode, so for E_cell to be positive, E_cathode must be greater than E_anode (Reason is false)."
      },
      {
        id: "elec_q58",
        type: "assertion-reason",
        text: "Evaluate the assertion and reason statements below.",
        assertion: "Conductivity (κ) of all electrolytes decreases on dilution.",
        reason: "On dilution, the number of ions per unit volume decreases.",
        correct: 0,
        explanation: "Conductivity is the conductance of 1 cm³ of solution. On dilution, though total conductance increases, the number of ions per unit volume decreases, leading to a decrease in conductivity. Both statements are true and the reason correctly explains the assertion."
      },
      {
        id: "elec_q60",
        type: "assertion-reason",
        text: "Evaluate the assertion and reason statements below.",
        assertion: "Mercury cells do not give a steady cell potential over their lifetime.",
        reason: "In the mercury cell reaction, no ions are involved in the overall solution reaction.",
        correct: 4,
        explanation: "Mercury cells are famous for providing a constant potential (1.35 V) throughout their lifetime because the overall cell reaction does not involve any ions in solution whose concentration could change. Therefore, the assertion is false but the reason is true."
      }
    ]
  },
  {
    id: "kinetics",
    title: "Unit 4: Chemical Kinetics",
    description: "Master reaction rates, rate laws, collision theory, activation energy, and the Arrhenius equation.",
    questions: [
      {
        id: "kin_q1",
        type: "single",
        text: "The main role of a catalyst in a chemical reaction is to change the:",
        options: [
          "Gibbs energy of the reaction (ΔG)",
          "Enthalpy of the reaction (ΔH)",
          "Activation energy of the reaction (Ea)",
          "Equilibrium constant of the reaction (Kc)"
        ],
        correct: 2,
        explanation: "A catalyst provides an alternative pathway for the reaction with a lower activation energy, thereby increasing the rate of the reaction. It does not alter ΔG, ΔH, or equilibrium position."
      },
      {
        id: "kin_q2",
        type: "single",
        text: "In the presence of a catalyst, the heat evolved or absorbed during a chemical reaction:",
        options: [
          "Increases",
          "Decreases",
          "Remains unchanged",
          "May increase or decrease depending on the path"
        ],
        correct: 2,
        explanation: "Enthalpy of reaction (ΔH) is a state function representing the energy difference between products and reactants. A catalyst lowers activation energy but does not change the energy levels of reactants or products; hence, the heat of reaction remains unchanged."
      },
      {
        id: "kin_q3",
        type: "single",
        text: "The activation energy of a chemical reaction can be determined experimentally by:",
        options: [
          "Determining the rate constant at standard temperature.",
          "Determining the rate constants at two different temperatures.",
          "Determining the probability of molecular collision.",
          "Using a catalyst."
        ],
        correct: 1,
        explanation: "By measuring the rate constants k1 and k2 at temperatures T1 and T2, we can apply the integrated form of the Arrhenius equation: log(k2/k1) = (Ea / 2.303 R) * [(T2 - T1) / (T1 * T2)] to calculate Ea."
      },
      {
        id: "kin_q4",
        type: "single",
        text: "Consider the energy coordinate diagram where the transition state energy is E1 above reactants and E2 above products. The correct statement is:",
        options: [
          "Activation energy of the forward reaction is E1, and the product is less stable than the reactant.",
          "Activation energy of the forward reaction is E1, and the product is more stable than the reactant.",
          "Activation energy of the forward reaction is E1 + E2, and the product is less stable than the reactant.",
          "Activation energy of the forward reaction is E1 + E2, and the product is more stable than the reactant."
        ],
        correct: 0,
        explanation: "The activation energy for the forward reaction is the energy difference between the transition state (activated complex) and the reactants, which is E1. Since the products lie at a higher energy than the reactants, the reaction is endothermic, and the products are less stable than the reactants."
      },
      {
        id: "kin_q5",
        type: "single",
        text: "Consider a first order gas phase decomposition: A(g) -> B(g) + C(g). The initial pressure was pi. After time t, the total pressure became pt. The rate constant k is expressed as:",
        options: [
          "k = (2.303/t) * log[ pi / (pi - x) ]",
          "k = (2.303/t) * log[ pi / (2pi - pt) ]",
          "k = (2.303/t) * log[ pi / (2pi + pt) ]",
          "k = (2.303/t) * log[ pi / (pi + x) ]"
        ],
        correct: 1,
        explanation: "Let x be the decrease in pressure of A at time t. Total pressure pt = (pi - x) + x + x = pi + x. Thus, x = pt - pi. The pressure of A at time t is p_A = pi - x = pi - (pt - pi) = 2pi - pt. For a first order reaction, k = (2.303/t) * log(pi / p_A) = (2.303/t) * log[ pi / (2pi - pt) ]."
      },
      {
        id: "kin_q6",
        type: "single",
        text: "According to the Arrhenius equation (k = A * e^(-Ea/RT)), which graph represents the variation of ln k vs 1/T?",
        options: [
          "A straight line with a negative slope (-Ea/R).",
          "A straight line with a positive slope starting from origin.",
          "A straight line with a positive slope and intercept.",
          "An exponential curve."
        ],
        correct: 0,
        explanation: "Taking natural logs: ln k = ln A - (Ea/R)*(1/T). Comparing this to y = mx + c, a plot of ln k vs 1/T gives a straight line with slope m = -Ea/R (negative) and intercept c = ln A."
      },
      {
        id: "kin_q14",
        type: "single",
        text: "The rate law for the reaction A + 2B -> C is found to be Rate = k [A][B]. If the concentration of reactant B is doubled while keeping the concentration of A constant, the value of the rate constant (k) will:",
        options: [
          "Remain the same",
          "Double",
          "Quadruple",
          "Be halved"
        ],
        correct: 0,
        explanation: "The rate constant k is independent of the concentrations of reactants. It changes only with temperature and the presence of a catalyst. Changing concentrations changes the rate of reaction, but not the rate constant itself."
      },
      {
        id: "kin_q21",
        type: "multiple",
        text: "In which of the following scenarios can the rate law NOT be determined simply from the balanced chemical equation? (Select all correct options)",
        options: [
          "When a reverse reaction is involved.",
          "When it is an elementary reaction.",
          "When the reaction proceeds via a sequence of elementary steps.",
          "When any of the reactants is present in excess."
        ],
        correct: [0, 2, 3],
        explanation: "For elementary reactions, the rate law matches molecularity. However, for complex reactions (sequence of steps), reactions involving equilibrium, or when a reactant is in excess (pseudo-first order), the rate law cannot be predicted directly from the overall stoichiometric equation and must be determined experimentally."
      },
      {
        id: "kin_q57",
        type: "assertion-reason",
        text: "Evaluate the assertion and reason statements below.",
        assertion: "The order of a reaction can be zero or fractional.",
        reason: "We cannot determine the reaction order solely from a balanced chemical equation.",
        correct: 1,
        explanation: "Both statements are correct: order can indeed be zero or fractional (Assertion is true), and order is an experimental quantity that cannot be deduced from stoichiometry alone (Reason is true). However, the reason is not a direct logical explanation for why fractional or zero orders exist (which is due to complex mechanisms). Hence, option B is correct."
      },
      {
        id: "kin_q58",
        type: "assertion-reason",
        text: "Evaluate the assertion and reason statements below.",
        assertion: "Order and molecularity of a chemical reaction are always the same.",
        reason: "Order is determined experimentally, whereas molecularity is the sum of stoichiometric coefficients of the rate-determining step.",
        correct: 4,
        explanation: "Order and molecularity are not always the same; complex reactions have overall order but molecularity is defined only for elementary steps (Assertion is false). The reason is a true statement outlining how both quantities are determined (Reason is true)."
      }
    ]
  },
  {
    id: "d_block",
    title: "Unit 8: The d- and f-Block Elements",
    description: "Master transition metal electronic configurations, oxidation states, magnetic moments, lanthanoid contraction, and alloys.",
    questions: [
      {
        id: "db_q1",
        type: "single",
        text: "The electronic configuration of a transition element X in the +3 oxidation state is [Ar] 3d⁵. What is its atomic number?",
        options: [
          "25",
          "26",
          "27",
          "24"
        ],
        correct: 1,
        explanation: "If X³⁺ has configuration [Ar] 3d⁵, the neutral atom X must have 3 more electrons. These are added back to the 4s (2 electrons) and 3d (1 electron) orbitals, yielding [Ar] 3d⁶ 4s². This corresponds to Iron (Fe), which has atomic number 26."
      },
      {
        id: "db_q2",
        type: "single",
        text: "The electronic configuration of Cu(II) is 3d⁹ whereas that of Cu(I) is 3d¹⁰. Which of the following statements is correct?",
        options: [
          "Cu(II) is more stable in aqueous solutions.",
          "Cu(II) is less stable in aqueous solutions.",
          "Cu(I) and Cu(II) are equally stable.",
          "The stability of Cu(I) and Cu(II) depends on the nature of copper salts."
        ],
        correct: 0,
        explanation: "Although Cu⁺ has a fully filled d-orbital (3d¹⁰), Cu²⁺ (3d⁹) is more stable in aqueous solution because of its much higher negative hydration enthalpy, which more than compensates for the second ionisation enthalpy of copper."
      },
      {
        id: "db_q3",
        type: "single",
        text: "Given the metallic radii of some transition elements: Fe (126 pm), Co (125 pm), Ni (125 pm), Cu (128 pm). Which of these elements has the highest density?",
        options: [
          "Fe",
          "Ni",
          "Co",
          "Cu"
        ],
        correct: 3,
        explanation: "Density increases across a period from left to right because atomic mass increases while atomic volume decreases or changes very little. Among Fe, Co, Ni, and Cu, Copper (Cu) has the highest mass and a relatively small radius, giving it the highest density."
      },
      {
        id: "db_q4",
        type: "single",
        text: "Transition elements form coloured salts due to d-d transitions. Which of the following compounds will be coloured in the solid state?",
        options: [
          "Ag2SO4",
          "CuF2",
          "ZnF2",
          "Cu2Cl2"
        ],
        correct: 1,
        explanation: "CuF2 contains Cu²⁺ (3d⁹), which has one unpaired electron. Unpaired electrons undergo d-d transitions, making the compound coloured. Zn²⁺ (3d¹⁰) in ZnF2 and Cu⁺ (3d¹⁰) in Cu2Cl2 have no unpaired electrons and are colourless. Ag⁺ in Ag2SO4 is 4d¹⁰ and colourless."
      },
      {
        id: "db_q5",
        type: "single",
        text: "On adding a small amount of KMnO4 to concentrated H2SO4, a green oily compound is formed which is highly explosive. This compound is:",
        options: [
          "Mn2O7",
          "MnO2",
          "MnSO4",
          "Mn2O3"
        ],
        correct: 0,
        explanation: "KMnO4 reacts with concentrated H2SO4 to form manganese heptoxide (Mn2O7), which is a highly explosive green oil: 2KMnO4 + 2H2SO4 -> Mn2O7 + 2KHSO4 + H2O."
      },
      {
        id: "db_q6",
        type: "single",
        text: "Which of the following electronic configurations of transition elements will exhibit the highest spin-only magnetic moment?",
        options: [
          "3d⁷",
          "3d⁵",
          "3d⁸",
          "3d²"
        ],
        correct: 1,
        explanation: "The spin-only magnetic moment depends on the number of unpaired electrons (n) via μ = sqrt(n(n+2)) BM. A 3d⁵ configuration has 5 unpaired electrons (maximum possible in d-orbital), thus exhibiting the highest magnetic moment (~5.92 BM)."
      },
      {
        id: "db_q7",
        type: "single",
        text: "Which oxidation state is most common and characteristic for all lanthanoids?",
        options: [
          "+2",
          "+3",
          "+4",
          "+5"
        ],
        correct: 1,
        explanation: "The +3 oxidation state is the most stable and common oxidation state shown by all lanthanoids."
      },
      {
        id: "db_q22",
        type: "multiple",
        text: "Generally, transition metal salts are coloured due to d-d transitions. Which of the following compounds are coloured in solution/solid state? (Select all correct options)",
        options: [
          "KMnO4",
          "Ce(SO4)2",
          "TiCl4",
          "Cu2Cl2"
        ],
        correct: [0, 1],
        explanation: "KMnO4 is intensely purple due to oxygen-to-manganese charge transfer (not d-d, but still coloured). Ce(SO4)2 is yellow due to charge transfer. TiCl4 (Ti⁴⁺ is 3d⁰) and Cu2Cl2 (Cu⁺ is 3d¹⁰) have no d-electrons or are fully paired and are colourless."
      },
      {
        id: "db_q59",
        type: "assertion-reason",
        text: "Evaluate the assertion and reason statements below.",
        assertion: "Cu²⁺ iodide is not known.",
        reason: "Cu²⁺ oxidises I⁻ to iodine.",
        correct: 0,
        explanation: "Cu²⁺ iodide is unstable and does not exist because Cu²⁺ is a strong enough oxidising agent to oxidise iodide ions (I⁻) into elemental iodine (I2), reducing itself to Cu⁺. Thus, both statements are true and the reason explains the assertion."
      },
      {
        id: "db_q60",
        type: "assertion-reason",
        text: "Evaluate the assertion and reason statements below.",
        assertion: "Separation of Zirconium (Zr) and Hafnium (Hf) is extremely difficult.",
        reason: "Zr and Hf lie in the same group of the periodic table.",
        correct: 1,
        explanation: "Both statements are correct: separation is indeed very difficult (Assertion is true), and they belong to Group 4 (Reason is true). However, the chemical similarity and identical sizes of Zr and Hf that cause separation difficulties are due to 'lanthanoid contraction', not just because they are in the same group. Hence, the reason is not the correct explanation."
      }
    ]
  },
  {
    id: "coordination",
    title: "Unit 9: Coordination Compounds",
    description: "Master ligands, coordination numbers, isomerism, crystal field theory (CFT), and IUPAC nomenclature.",
    questions: [
      {
        id: "coord_q1",
        type: "single",
        text: "Which of the following complexes formed by Cu²⁺ ions is the most stable?",
        options: [
          "[Cu(NH3)4]²⁺  (log K = 11.6)",
          "[Cu(CN)4]²⁻  (log K = 27.3)",
          "[Cu(en)2]²⁺  (log K = 15.4)",
          "[Cu(H2O)4]²⁺  (log K = 8.9)"
        ],
        correct: 1,
        explanation: "The stability of a complex is measured by its stability constant (K). The higher the log K value, the more stable the complex. [Cu(CN)4]²⁻ has the highest value of log K = 27.3, indicating it is the most stable."
      },
      {
        id: "coord_q2",
        type: "single",
        text: "The correct order of absorption of wavelength of light in the visible region for [Co(NH3)6]³⁺, [Co(CN)6]³⁻, and [Co(H2O)6]³⁺ is:",
        options: [
          "[Co(CN)6]³⁻ > [Co(NH3)6]³⁺ > [Co(H2O)6]³⁺",
          "[Co(NH3)6]³⁺ > [Co(H2O)6]³⁺ > [Co(CN)6]³⁻",
          "[Co(H2O)6]³⁺ > [Co(NH3)6]³⁺ > [Co(CN)6]³⁻",
          "[Co(CN)6]³⁻ > [Co(H2O)6]³⁺ > [Co(NH3)6]³⁺"
        ],
        correct: 2,
        explanation: "According to the spectrochemical series, ligand strength is CN⁻ > NH3 > H2O. Stronger ligands cause larger crystal field splitting (Δo). Since E = h*c/λ, larger splitting energy corresponds to absorption of shorter wavelengths. Therefore, the wavelength of absorbed light follows the reverse order of ligand strength: H2O > NH3 > CN⁻."
      },
      {
        id: "coord_q3",
        type: "single",
        text: "When 0.1 mol of CoCl3(NH3)5 is treated with an excess of AgNO3, 0.2 mol of AgCl are precipitated. The conductivity of the solution will correspond to a:",
        options: [
          "1:3 electrolyte",
          "1:2 electrolyte",
          "1:1 electrolyte",
          "3:1 electrolyte"
        ],
        correct: 1,
        explanation: "Precipitation of 0.2 mol of AgCl from 0.1 mol of complex means 2 chloride ions are outside the coordination sphere. Thus, the formula is [CoCl(NH3)5]Cl2. In solution, this dissociates into one [CoCl(NH3)5]²⁺ cation and two Cl⁻ anions, representing a 1:2 electrolyte."
      },
      {
        id: "coord_q4",
        type: "single",
        text: "When 1 mol of CrCl3·6H2O is treated with an excess of AgNO3, 3 mol of AgCl are obtained. The structural formula of the complex is:",
        options: [
          "[CrCl3(H2O)3]·3H2O",
          "[CrCl2(H2O)4]Cl·2H2O",
          "[CrCl(H2O)5]Cl2·H2O",
          "[Cr(H2O)6]Cl3"
        ],
        correct: 3,
        explanation: "Precipitation of 3 moles of AgCl means all 3 chloride ions are present outside the coordination sphere as free chloride ions. Therefore, the complex formula is [Cr(H2O)6]Cl3."
      },
      {
        id: "coord_q5",
        type: "single",
        text: "The correct IUPAC name of the complex [Pt(NH3)2Cl2] is:",
        options: [
          "Diamminedichloridoplatinum(II)",
          "Diamminedichloridoplatinum(IV)",
          "Diamminedichloridoplatinum(0)",
          "Dichloridodiammineplatinum(IV)"
        ],
        correct: 0,
        explanation: "The ligands are ammine (NH3, neutral) and chlorido (Cl⁻, charge -1). They are named alphabetically: diamminedichlorido. Pt has oxidation state +2. Thus, the IUPAC name is Diamminedichloridoplatinum(II)."
      },
      {
        id: "coord_q6",
        type: "single",
        text: "Which of the following is the most stable complex species due to the chelate effect?",
        options: [
          "[Fe(CO)5]",
          "[Fe(CN)6]³⁻",
          "[Fe(C2O4)3]³⁻",
          "[Fe(H2O)6]³⁺"
        ],
        correct: 2,
        explanation: "Oxalate (C2O4²⁻) is a didentate ligand that forms a stable 5-membered chelate ring with the central iron ion. Chelated complexes are significantly more stable than non-chelated complexes."
      },
      {
        id: "coord_q7",
        type: "single",
        text: "Which of the following complex ions exhibits geometrical isomerism?",
        options: [
          "[Cr(H2O)4Cl2]⁺",
          "[Pt(NH3)3Cl]⁺",
          "[Co(NH3)6]³⁺",
          "[Co(CN)5(NC)]³⁻"
        ],
        correct: 0,
        explanation: "[Cr(H2O)4Cl2]⁺ is an [MA4B2] type octahedral complex, which can exist in cis (Cl-Cl at 90°) and trans (Cl-Cl at 180°) geometrical isomeric forms."
      },
      {
        id: "coord_q8",
        type: "single",
        text: "The crystal field splitting energy (CFSE) for octahedral [CoCl6]⁴⁻ is 18,000 cm⁻¹. The CFSE for tetrahedral [CoCl4]²⁻ with the same metal and ligands will be:",
        options: [
          "18,000 cm⁻¹",
          "16,000 cm⁻¹",
          "8,000 cm⁻¹",
          "20,000 cm⁻¹"
        ],
        correct: 2,
        explanation: "The relationship between tetrahedral splitting (Δt) and octahedral splitting (Δo) is Δt = (4/9) * Δo. Thus, Δt = (4/9) * 18,000 cm⁻¹ = 8,000 cm⁻¹."
      },
      {
        id: "coord_q41",
        type: "assertion-reason",
        text: "Evaluate the assertion and reason statements below.",
        assertion: "Toxic metal ions are removed from the body using chelating ligands.",
        reason: "Chelate complexes tend to be exceptionally stable.",
        correct: 0,
        explanation: "Chelating ligands form highly stable ring structures with toxic heavy metals (like lead or copper), which allows them to bind the ions firmly and safely excrete them from the body. Both statements are true and the reason explains the assertion."
      },
      {
        id: "coord_q43",
        type: "assertion-reason",
        text: "Evaluate the assertion and reason statements below.",
        assertion: "Linkage isomerism arises in coordination compounds containing an ambidentate ligand.",
        reason: "An ambidentate ligand has two different donor atoms and can coordinate through either.",
        correct: 0,
        explanation: "Linkage isomerism occurs when a ligand can bind in multiple ways. Ambidentate ligands (like NO2⁻/ONO⁻ or SCN⁻/NCS⁻) possess two donor atoms, and can bind to the metal through either. Both statements are correct and the reason explains the assertion."
      }
    ]
  }
];
