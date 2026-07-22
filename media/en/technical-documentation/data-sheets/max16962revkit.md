<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX16962R Evaluation Kit Evaluates: MAX16962R

## General Description

The MAX16962R evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX16962R high-efficiency  synchronous  PWM  step-down  converter with  integrated  high-side  and  low-side  switches.  The EV  kit  output  is  configured  to  3.3V  and  delivers  up  to 4A output current. The EV kit circuit operates at the IC's internally set 2.2MHz switching frequency.

The  EV  kit  is  designed  to  operate  from  a  single  DC power supply that provides 3.5V to 5.5V and up to 4A for  normal  operation.  However,  the  IC  has  a  2.7V  to 5.5V  input  voltage  range.  The  EV  kit,  shipped  with  a MAX16962RATEA/V+  in  a  16-pin  TQFN  package  with exposed pad, provides enhanced thermal dissipation.

## Features

- S 3.5V to 5.5V Input Voltage Range (EV Kit)
- S 3.3V at 4A Output
- S Fixed 2.2MHz Switching Frequency
- S Configurable Forced-PWM and Skip-Mode Operation
- S External Synchronization
- S Power-Good Output (PG1)
- S Overcurrent and Thermal-Shutdown Protection
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX16962R Evaluation Kit Evaluates: MAX16962R

## Quick Start

## Required Equipment

- MAX16962R EV kit
- 5.5V adjustable, 5A power supply
- Electronic load capable of sinking up to 4A
- Two digital voltmeters

## Procedure

The EV kit circuit uses a step-down converter IC to implement a step-down synchronous DC-DC converter circuit with  a  fixed  2.2MHz  switching  frequency.  The  EV  kit output is configured to 3.3V and delivers up to 4A output current.  The  IC's  on-board  low  R DSON   switches  help minimize  efficiency  losses  at  heavy  loads  and  reduce critical/parasitic  inductances,  resulting  in  a  very  small compact layout. The EV kit circuit is designed to operate from a single DC power supply that provides 3.5V to 5.5V and up to 4A of current.

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify  that  shunts  are  installed  on  jumpers  JU1 (output enabled) and JU2 (forced-PWM mode).
- 2) Connect  the  power-supply  positive  and  ground terminals  to  the  VSUP  and  PGND  banana  jacks, respectively.
- 3) Connect  the  positive  and  negative  terminal  of  the electronic  load  to  the  VOUT  and  PGND  banana jacks, respectively.
- 4) Connect  a  voltmeter  across  the  VOUT  and  PGND PCB pads.
- 5) Connect a voltmeter across the PG1 and GND PCB pads.
- 6) Turn on the power supply.
- 7) Set the power-supply voltage to 5V.
- 8) Enable the electronic load and set it to 4A
- 9) Verify that the voltmeter connected to  VOUT measures approximately 3.3V.
- 10)  Verify that the voltmeter connected to PG1 measures approximately 5V.

## Detailed Description of Hardware

The MAX16962R EV kit is a fully assembled and tested circuit  board  that  contains  all  the  components  necessary  to  evaluate  the  performance  of  the  MAX16962R high-efficiency, synchronous PWM step-down converter with integrated high-side and low-side switches. The IC is  available in a 16-pin TQFN package and features an exposed pad for thermal dissipation.

The EV kit converter circuit is configured to 3.3V using resistors  R6  and  R7.  The  EV  kit  can  be  configured  to operate  in  forced  fixed-frequency  PWM  mode  or  lowquiescent current skip mode using jumper JU2. Ferrite bead  L2  and  capacitor  C9  are  available  for  preventing  oscillation  at  the  circuit  input  when  interfacing  long cables from the power supply to the EV kit's VSUP and PGND PCB pads.

The circuit includes a SYNC PCB pad that can be used to  synchronize  the  IC  to  frequencies  operating  in  the 1.7MHz to 2.5MHz range. The EV kit also provides a PG1 PCB  pad  for  monitoring  the  power-good  output  and  a PWM PCB pad for driving the PWM input.

## Configuring the Output Voltage (VOUT)

The EV kit converter is configured to 3.3V using resistors R6 and R7. The EV kit's output voltage (V OUT ) can be reconfigured  in  the  range  of  0.8V  to  3.6V  by  replacing resistors R6 and R7. Use the following equation to reconfigure the output voltage to the desired value:

<!-- formula-not-decoded -->

where V OUT  is the desired output voltage in volts and R6 is typically less than 100k I .

The external feedback resistive divider must be frequency compensated for proper operation. Place a capacitor across  each  resistor  in  the  resistive-divider  network. Use the following equation to determine the value of the capacitors:

<!-- formula-not-decoded -->

## MAX1692R Evaluation Kit Evaluates: MAX1692R

Reconfiguring the EV kit circuit for a new output voltage may require replacing inductor L1 and capacitors C1-C4. To select new values for inductor L1 and capacitors C1C4, refer to the Inductor Selection , Output Capacitor , and Input Capacitor sections in the MAX16962 IC data sheet.

## Enable Control (JU1)

Jumper JU1 configures the EV kit output for turn-on/turnoff control. Install a shunt to enable the output. Remove the  shunt  to  disable  the  EV  kit  output.  VOUT  can  also be enabled by applying an external signal greater than 1.95V (typ) at the EN1 and GND PCB pads. See Table 1 for proper JU1 configuration.

## Switching Mode of Operation (JU2)

Jumper  JU2  configures  the  EV  kit  for  forced-PWM,  or skip-mode  operation.  In  PWM  mode,  the  converter switches at a constant frequency with variable on-time. In  skip  mode,  the  converter's  switching  frequency  is load dependent until the output load reaches a certain threshold. Install a shunt to operate the EV kit in forcedPWM mode. Remove the shunt to operate in skip mode. See Table 2 for proper JU2 configuration. Use the PWM PCB pad for monitoring the logic voltage at the PWM pin.

Table 1. Enable Control (JU1)

| SHUNT POSITION   | EN1 PIN                        | VOUT                                                        |
|------------------|--------------------------------|-------------------------------------------------------------|
| Installed        | Connected to PSUP              | Enabled                                                     |
| Not installed    | Connected to ground through R1 | Disabled or external source applied at EN1 and GND PCB pads |

## Power-Good Output (PG1)

The EV kit provides a PCB pad to monitor the status of the  power-good  PG1  output.  The  PG1  output  can  be used as a system reset signal during power-up. PG1 is high after V OUT  rises 10% above its programmed output voltage. PG1 is pulled up to PSUP using resistor R4. The PG1 output  is  pulled  low  when  the  VOUT  drops  below 92% (typ) of its nominal set voltage or rises 10% above its nominal set voltage.

## Synchronization Input (SYNC)

The EV kit's SYNC PCB pad can be used to synchronize the  IC  with  an  external  digital  clock  in  the  1.75MHz  to 2.5MHz  range.  When  SYNC  is  driven  with  an  external digital  clock,  the  IC  synchronizes  to  the  rising  edge  of the external clock.

The digital square-wave clock source must provide the following signal qualities:

Output voltage:

- Logic-low = 0 to 0.4V
- Logic-high = 1.8V to PSUP

To  use  external  synchronization,  connect  the  external square-wave clock to the SYNC and GND PCB pads.

## Table 2. Mode of Operation (JU2)

| SHUNT POSITION   | PWM PIN                     | SWITCHING MODE   |
|------------------|-----------------------------|------------------|
| Installed        | Connected to PSUP           | Forced PWM       |
| Not installed    | Connected to GND through R2 | Skip             |

## MAX1692R Evaluation Kit Evaluates: MAX1692R

## Component List

| DESIGNATION           |   QTY | DESCRIPTION                                                                |
|-----------------------|-------|----------------------------------------------------------------------------|
| GND                   |     1 | Small black test point                                                     |
| JU1, JU2              |     2 | 2-pin headers                                                              |
| L1                    |     1 | 1 F H, 3.5A inductor Coilcraft XAL4020-102                                 |
| L2                    |     0 | Not installed, ferrite bead- short (PC trace) (0805)                       |
| PG1, SYNC             |     2 | Small red test points                                                      |
| PGND (x2), VOUT, VSUP |     4 | Uninsulated banana jacks                                                   |
| R1                    |     1 | 100k I Q 5% resistor (0603)                                                |
| R2, R4, R5            |     3 | 20k I Q 5% resistors (0603)                                                |
| R3                    |     1 | 10 I Q 5% resistor (0603)                                                  |
| R6                    |     1 | 30.1k I Q 1% resistor (0603)                                               |
| R7                    |     1 | 95.3k I Q 1% resistor (0603)                                               |
| U1                    |     1 | 2.2MHz low-voltage step-down converter (16 TQFN-EP) Maxim MAX16962RATEA/V+ |
| -                     |     2 | Shunts (JU1, JU2)                                                          |
| -                     |     1 | PCB: MAX19692 EVKIT                                                        |

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| C1, C2        |     2 | 10 F F Q 10%, 10V X7R ceramic capacitors (1206) Murata GRM31CR71A106K  |
| C3, C4        |     2 | 47 F F Q 10%, 6.3V X7R ceramic capacitors (1210) Murata GRM32ER70J476K |
| C5            |     1 | 1 F F Q 10%, 10V X7R ceramic capacitor (0603) Murata GRM188R71A105K    |
| C6            |     0 | Not installed, ceramic capacitor (1206)                                |
| C7            |     1 | 100pF Q 5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H101J     |
| C8            |     1 | 33pF Q 5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H330J      |
| C9            |     1 | 100 F F Q 20%, 6.3V POS capacitor (3.5mm x 2.8mm) SANYO 6TPG100M       |

## Component Suppliers

| SUPPLIER                 | PHONE        | WEBSITE                |
|--------------------------|--------------|------------------------|
| Coilcraft, Inc.          | 847-639-6400 | www.coilcraft.com      |
| Murata Americas          | 770-436-1300 | www.murataamericas.com |
| SANYO Electric Co., Ltd. | 619-661-6835 | www.sanyo.com          |

Note:

Indicate that you are using the MAX16962R when contacting these component suppliers.

## MAX16962R Evaluation Kit Evaluates: MAX16962R

Figure 1. MAX16962R EV Kit Schematic

<!-- image -->

## MAX16962R Evaluation Kit Evaluates: MAX16962R

<!-- image -->

Figure 2. MAX16962R EV Kit Component Placement GuideComponent Side

Figure 3. MAX16962R EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX16962R EV Kit PCB Layout-PGND Layer 2

<!-- image -->

## MAX16962R Evaluation Kit Evaluates: MAX16962R

Figure 5. MAX16962R EV Kit PCB Layout-SGND Layer 3

<!-- image -->

<!-- image -->

Figure 6. MAX16962R EV Kit PCB Layout-Solder Side

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX16962REVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX1692R Evaluation Kit

## Evaluates: MAX1692R

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/13            | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.