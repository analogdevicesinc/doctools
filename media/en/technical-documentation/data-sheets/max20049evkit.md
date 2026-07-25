<!-- lastmod 2022-08-03 -->
## MAX20049 Evaluation Kit

## General Description

The MAX20049 evaluation kit (EV kit) is a fully assembled and  tested  application  circuit  for  the  MAX20049  mini dual  step-down  converters  with  dual  LDOs.  The  EV  kit is set up to provide four output voltages from one single input-voltage source. Both step-down converters (OUT1, OUT2) and LDO3 can accept a high input-voltage source (17V max). The IC also features a high-PSRR and lownoise LDO3. Each step-down converter can deliver up to 500mA load current, whereas LDO3 delivers 100mA and LDO4 400mA.

## Features

- MAX20049ATEA/VY+ Installed (Other IC Options Available):
- VOUT1 = 3.8V
- VOUT2 = 1.8V
- VOUT3 = 3.3V
- VOUT4  = 1.2V
- Inductors Installed Balance Size and Efficiency (see Bill of Materials)
- PGOOD PCB Pad Provided for Voltage Monitoring
- Configurable SUP1 and SUP2 Using Resistors R4 and R5
- Selectable LDOIN3 Input Using Jumper JU1
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX20049

## Quick Start

## Required Equipment

- MAX20049 EV kit
- 2.7V to 18V, 3A power supply
- Four voltmeters
- Electronic load capable of sinking 1A

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that jumper JU1 is in the default configuration, as shown in Table 1.
- 2) Set the power-supply voltage to 14V and then turn off.
- 3) Connect  the  positive  and  negative  terminals  of  the power supply to the SUP and PGND3 test pads, respectively.
- 4) Connect the positive terminal of the first voltmeter to the OUT1 test pad and the negative terminal to the GND1 test pad.
- 5) Connect the positive terminal of the second voltmeter to the OUT2 test pad and the negative terminal to the GND2 test pad.
- 6) Connect the positive terminal of the third voltmeter to the OUT3 test pad and the negative terminal to the GND3 test pad.
- 7) Connect the positive terminal of the fourth voltmeter to  the  OUT4  test  pad  and  the  negative  terminal  to GND4 test pad.
- 8) Turn on the power supply.
- 9) Verify that OUT1 is approximately 3.8V.
- 10) Verify that OUT2 is approximately 1.8V.
- 11) Verify that OUT3 is approximately 3.3V.
- 12) Verify that OUT4 is approximately 1.2V.
- 13) Set the electronic load to 500mA, turn off, and then connect to OUT1.
- 14) Turn on the electronic load and verify that OUT1 is still  approximately  3.8V. Turn  off  the  electronic  load and disconnect.

<!-- image -->

## MAX20049 Evaluation Kit

- 15) Set the electronic load to 500mA, turn off, and then connect to OUT2.
- 16) Turn on the electronic load and verify that OUT2 is still approximately 1.8V. Turn off the electronic load and disconnect.
- 17) Set the electronic load to 100mA, turn off, and then connect to OUT3.
- 18) Turn on the electronic load and verify that OUT3 is still approximately 3.3V. Turn off the electronic load and disconnect.
- 19) Set the electronic load to 400mA, turn off, and then connect to OUT4.
- 20) Turn on the electronic load and verify that OUT4 is still approximately 1.2V. Turn off the electronic load and disconnect.

## Detailed Description of Hardware

The MAX20049 EV kit, which evaluates the MAX20049 dual step-down converter with dual LDOs, can supply up to four separate voltage rails. The MAX20049 output voltages are preprogrammed and set at the factory.

Both OUT1 and OUT2 converters are high voltage (18V max) and support load currents up to 500mA. LDO3 also supports  a  high-input  voltage  (18V  max)  and  is  a  highPSRR, low-noise 100mA LDO. LDO4 is a low-input-voltage LDO and can support up to 400mA of load current.

## Output Voltage Configurations

Contact the factory for available voltage options.

Evaluates: MAX20049

## High-Voltage, High-PSRR LDO3 Input Power Selector

Jumper JU1 configures the input power source into the high-voltage, high-PSRR LDO3. See Table 2 to configure the appropriate power source for LDO3.

## Flexible Power Configurations

Below  are  some  of  the  possible  configurations  of  the MAX20049. The MAX20049 EV kit has a separate jumper

## Table 1. Default Jumper Settings (JU1)

| JUMPER   | DEFAULT SHUNT POSITION   | FUNCTION               |
|----------|--------------------------|------------------------|
| JU1      | 1-4                      | LDO3 powered from OUT1 |

## Table 2. Input Power Source to LDOIN3 Pin (JU1)

| SHUNT POSITION   | LDOIN3 PIN               |
|------------------|--------------------------|
| 1-2              | Connected to OUT2        |
| 1-3              | Connected to car battery |
| 1-4*             | Connected to OUT1        |

* Default position.

## MAX20049 Evaluation Kit

for the input power source of LDO3. The EV kit is setup by default to bring the main power rail 'SUP' to both OUT1 and OUT2 step-down converters by resistors R5 and R4 respectively. To make other input connections remove R4 and/or R5 and apply power to SUP1 and SUP2 directly.

## Startup Sequencing

Refer to the MAX20049 IC data sheet for details.

## Output Monitoring (PGOOD)

Figure 1. Single-Chip, Single-Power Supply Solution

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20049EVKIT# | EV Kit |

# Denotes RoHS compliant.

## Evaluates: MAX20049

The  EV  kit  provides  a  power-good  output  test  point (PGOOD) to monitor the status of the two buck outputs (OUT1  and  OUT2)  and  LDOs.  PGOOD  becomes  high impedance  when  all  output  voltages  are  in  regulation. PGOOD goes low when the any regulator output voltage drops to 92% (typ) or rises to 108% (typ) of its nominal regulated voltage.

Figure 2. 3-Channel Solution Configurable on the EV Kit

<!-- image -->

│

## MAX20049 EV Kit Bill of Materials

|   QTY | REFERENCE DESIGNATOR   | DESCRIPTION                                                             | MFG. PART NUMBER             |
|-------|------------------------|-------------------------------------------------------------------------|------------------------------|
|     2 | C1, C2                 | 22uF ±10%, 10V X6S ceramic capacitor (0805)                             | Murata GRT21BC81A226ME13L    |
|     1 | C3                     | 4.7uF ±10%, 6.3V X7R ceramic capacitor (0603)                           | Taiyo Yuden JMK107BB7475KA-T |
|     1 | C4                     | 2.2uF ±10%, 6.3V X7S ceramic capacitor (0402)                           | TDK C1005X7S0J225K050BC      |
|     1 | C5                     | 4.7uF ±10%, 10V X7R ceramic capacitor (0805)                            | TDK CGA4J3X7R1A475K125AB     |
|     2 | C8, C9                 | 0.1μF ±10%, 50V X7R ceramic capacitors (0402)                           | TDK CGA2B3X7R1H104K050BB     |
|     2 | C12, C13               | 2.2μF ±10%, 50V X7R ceramic capacitors (0805)                           | TDK CGA4J3X7R1H225K125AB     |
|     0 | C14                    | Not Installed, 47μF ±20%, 50V aluminum electrolytic capacitors (Case F) | Panasonic EEE-TG1H470UP      |
|     0 | C15, C16               | Not installed, ceramic capacitor (1206)                                 |                              |
|     1 | BIAS                   | PCB mini test points (White)                                            | KEYSTONE 5012                |
|     0 | FB1                    | Not installed, Ferrite Bead                                             |                              |
|     1 | JU1                    | 4-pin headers (CUT TO FIT)                                              | Sullins PCC03SAAN            |
|     2 | LX1, LX2               | 3.3uH 2A, 124mOhm Inductor (2.5mm x 2mm x 1.2mm)                        | TDK TFM252012ALMA3R3MTAA     |
|     1 | R3                     | 10kOhm ±1%, resistor (0402)                                             | Vishay CRCW040210K0FK        |
|     2 | R4, R5                 | 0 Ohm ±1%, resistors (1206)                                             | Vishay CRCW12060000Z0EAHP    |
|     1 | U1                     | Quad Power Supply for Automotive Camera Modules MAX20049ATEA            | Maxim MAX20049ATEA/VY+       |
|     1 | See Jumper Table       | Shunts                                                                  |                              |
|     1 | -                      | PCB: MAX20049 EVKIT                                                     | MAXIM MAX20049EVKIT#         |

Evaluates: MAX20049

## MAX20049 EV Kit Schematic

<!-- image -->

## MAX20049 EV Kit PCB Layouts

MAX20049 EV Kit PCB Layout-Top Silk

<!-- image -->

## MAX20049 EV Kit PCB Layouts (continued)

MAX20049 EV Kit PCB Layout-Top Side

<!-- image -->

## MAX20049 EV Kit PCB Layouts (continued)

MAX20049 EV Kit PCB Layout-Layer 2

<!-- image -->

## MAX20049 EV Kit PCB Layouts (continued)

MAX20049 EV Kit PCB Layout-Layer 3

<!-- image -->

## MAX20049 EV Kit PCB Layouts (continued)

MAX20049 EV Kit PCB Layout-Bottom Side

<!-- image -->

## MAX20049 EV Kit PCB Layouts (continued)

<!-- image -->

MAX20049 EV Kit PCB Layout-Bottom Silk

## MAX20049 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/18            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX20049