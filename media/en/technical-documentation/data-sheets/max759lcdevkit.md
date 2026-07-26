<!-- lastmod 2022-08-02 -->
## MIXYIM

## MAX759 LCD Power Supply Evaluation Kit

## General Description

The MAX759 LCD power supply evaluation kit (EV kit) is aspecialapplicationcircuitthatusestheMAx759invertingDC-DCconvertertogeneratethevariablenegative voltage needed by liquid crystal displays(LCDs).Thekit is fully assembled using surface-mounted components. A potentiometermounted ontheboard alows adjustment of the output voltage over a -6V to -24V range.

## Features

- Fully Assembled Surface-Mount EV Kit
- ← -6V to -24V Adjustable Output
- ← 80% Conversion Efficiency
- ← 40mA Output Current

## Ordering Information

| PART            | TEMP. RANGE   | BOARD TYPE    |
|-----------------|---------------|---------------|
| MAX759LCDKIT-SO | 0℃to+70℃      | Surface-Mount |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                      | MANUFACTURER          |
|---------------|-------|----------------------------------|-----------------------|
| U1            |     1 | MAX759CPD                        |                       |
| None          |     1 | 2.0"x3.0"printed circuit board   |                       |
| None          |     1 | MAX759datasheet                  |                       |
| C1            |     1 | 150uF low-ESR tantalum capacitor | Sprague595D157X0016R7 |
| C2, C4        |     2 | 0.1μF chip capacitor             |                       |
| C3, C5        |     2 | 0.01μF chip capacitor            |                       |
| C6, C7        |     2 | 33μF low-ESR tantalum capacitor  | Sprague595D336X0035R7 |
| D1            |     1 | 1N5819 diode,40V                 | NIEC EC10QS04         |
| L1            |     1 | 50uH SMT transformer             | Coiltronics CTX50-1   |
| R1            |     1 | 10kΩ 5% resistor                 |                       |
| R2            |     1 | 6.81kΩ 1% resistor               |                       |
| R3            |     1 | 100kQsingle-turnpotentiometer    | Bourns 3352T-104-ND   |
| R4            |     1 | 33.2kQ 1% resistor               |                       |

Bourns: Coiltronics: Sprague:

Phone(714)781-5500,FAX(714)781-5273

Phone(305)781-8900

NIEC (Tokyo):Phone 81-3-3494-7411,FAX 81-3-3494-7414

Phone (516) 746-1385

MAXIMI

Call toll free 1-800-998-8800 for free samples 0r literature.

## MAX759 LCD Power Supply Evaluation Kit

## Detailed Description

## Input Supply Requirements

The MAX759 LCD power supply EV kit has a 4.5V to 6V inputrange.The lower input limit is due to the minimum operating voltage of the MAX759. The maximum input voltageislimitedbytheabsolutemaximumratingof the differential voltage between the V+ and LX pins with some margin for leakage inductance and turns ratio error.

Youcandeterminethemaximuminputcurrentrequirementbycalculating themaximumoutputpower levels. Formula1showstherelationshipbetweenoutputpower and input power with 80% efficiency. Formula 2 is the resultof expanding the first equation andsolvingforliN. Assuming a 5V input and a 24V,40mA load,the input currentcanthenbecalculated.

- (1) POUT / PIN = 80%
- (2) lIn = (lout x VouT) / (0.80 x Vin)

For VoUT = -24V, loUT = 40mA, and VIN = 5.0V: IIN = (40mA x 24V) / (0.80 x 5.0V) = 240mA

Note that the current is an average value. Peak currents are muchhigherduring theinductorcharging cycle.The capacitor between V+ and ground should be a low-ESR type, located as close to the MAx759 as possible. Use the EV kit layout as a guide.

## Output Circuit

Theoutputcircuit employs an autotransformertolimit the voltage swing on the MAx759's LX pin while producing the -24V output voltage.The voltage at the center tap of the transformer is one-half of the full output voltage. Thiskeepstheinput/outputdifferentialvoltagebelow the22VlimitgivenintheMAX759datasheetAbsolute Maximum Ratings.

TheSchottkydiodemusthaveabreakdownvoltage greater than 30v. At the maximum output voltage, the diodewillbereversedbiasedbythecombinationofthe -24Voutput and the+5Vinputsupplyvoltage.

The output voltage is determined by the resistors R2, R3, andR4,and theinternalVREFvoltage.UseFormula3 to calculate the output voltage.R2 should be a fixed resistor in the 5kQ to 15kQ range.R4 sets the minimum outputvoltagewhenthepotentiometerisadjusted toOQ. The maximum output voltage is achieved when R3 is adjustedformaximumresistance.

(3) VoUT = -(VREF/R2) ×(R3 + R4)

WhenR3isadjustedtozero:

VoUT = -(1.23V / 6.81kΩ) (0Ω + 33.2kΩ2) = -6.0V

2

<!-- image -->

Figure1.MAX759LCDPowerSupplyEVKitComponent PlacementGuide

Figure 2.MAX759 LCD Power Supply EV Kit Component-Side Layout

<!-- image -->

Figure3.MAX759LCDPowerSupplyEVKitSolder-Side Layout

<!-- image -->

MAXIM

## MAX759 LcD Power Supply Evaluation Kit

WhenR3isadjustedtomaximum:

VoUT = -(1.23V / 6.81kQ)(100kQ +33.2kQ) = -24.1V

Notethattherearetwo33uFoutputfiltercapacitors, which are necessarybecause of thelack of large-value capacitors with 35V breakdown in surface-mount packages.Radial leaded low-ESR capacitors are preferred for applications built with through-hole component mounting.

## Shutdown Pin

A 10kQ resistor pulls the shutdown (SHDN) pin to VIN for normal operation. The SHDN pin is connected to a pad near the edge of the card so the user may turn off the outputvoltagewithanexternalsignal.Somecurrentwill flow through R1 when SHDN is pulled to ground. The resistor is not needed in applications that strap SHDN to VIN or drive it with CMOS logic.

Figure4.MAX759LCDEVKitSchematic

<!-- image -->