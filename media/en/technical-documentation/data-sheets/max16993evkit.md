<!-- lastmod 2022-08-02 -->
## MAX16993 Evaluation Kit

## General Description

The MAX16993 evaluation kit (EV kit) is a fully assembled  and  tested  surface-mount  PCB  that  contains  all the  components  necessary  to  evaluate  the  MAX16993 power-management IC (PMIC). The EV kit includes one high-voltage  step-down  controller  and  two  low-voltage step-down converters.

The EV kit can operate from 3.5V to 36V input voltages and is optimized for automotive infotainment applications. The high-voltage controller is configured for a 5V output that  provides  at  least  5A.  The  low-voltage  step-down converters are configured for 3.3V and 1.2V, each providing  up  to  3A.  The  EV  kit  can  be  easily  reconfigured  to operate in continuous PWM mode, skip mode, or external synchronization operation.

The  EV  kit  comes  with  a  MAX16993AGJA/VY+  device installed, but is capable of evaluating other variants of the MAX16993 IC. Refer to the MAX16993 IC data sheet for external component selection.

## Component List

| DESIGNATION         |   QTY | DESCRIPTION                                                                            |
|---------------------|-------|----------------------------------------------------------------------------------------|
| C1                  |     1 | 2.2µF ±10%, 50V X7R ceramic capacitor (0805) TDK C2012X7R1H225K                        |
| C2                  |     1 | 1µF ±10%, 50V X7R ceramic capacitor (0805) TDK C2012X7R1H105K                          |
| C3, C4, C6, C7, C16 |     5 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) Murata GCM188R71H104K                    |
| C5                  |     1 | 220µF ±20%, 50V aluminum electrolytic capacitor (Case size H13) Panasonic EEV-TG1H221Q |
| C8, C13, C26        |     0 | Not installed, ceramic capacitors (0402)                                               |
| C9-C12              |     4 | 47µF ±10%, 10V X7R ceramic capacitors (1210) Murata GRM32ER71A476K                     |

Evaluates: MAX16993

## Features

- 3.5V	to	36V	Input	Range
- 20µA Quiescent Current with DC-DC Controller Enabled
- Output Voltages
- 5V Output at 5A (High-Voltage, Step-Down Controller, Buck 1)
- 3.3V Output at 3A (Step-Down Converter, Buck 2)
- 1.2V Output at 3A (Step-Down Converter, Buck 3)
- High-Frequency Operation
- 2.1MHz or Optional Divide-Down Operation for Buck 1
- Individual Enable Inputs and Reset Outputs
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

| DESIGNATION        |   QTY | DESCRIPTION                                                         |
|--------------------|-------|---------------------------------------------------------------------|
| C14                |     1 | 120pF ±10%, 50V ceramic capacitor (0402) AVX 04025C121KAT2A         |
| C15                |     1 | 1.5nF ±10%, 50V ceramic capacitor (0402) TDK C1005X7R1H152K         |
| C17                |     1 | 1µF ±10%, 16V X7R ceramic capacitor (0603) Murata GCM188R71C105K    |
| C18, C22           |     2 | 10µF ±10%, 6.3V X7R ceramic capacitors (0805) Murata GCM21BR70J106K |
| C19, C20, C23, C24 |     4 | 47µF ±10%, 6.3V X7R ceramic capacitors (1210) Murata GCM32ER70J476K |
| C21                |     1 | 20pF, 50V C0G ceramic capacitor (0402) Murata GRM1555C1H200J        |

<!-- image -->

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| C25           |     1 | 10pF, 50V C0G ceramic capacitor (0402) Murata GRM1555C1H100J            |
| C27           |     1 | 4.7µF ±10%, 50V X7R ceramic capacitor (1210) Murata GCM32ER71H475K      |
| D1            |     1 | Switching diode (SOD323) Diodes Inc. 1N4148WS                           |
| D2            |     1 | 5A low-VF mega Schottky barrier rectifier diode (SOD128) NXP PMEG3050EP |
| FB1           |     1 | 60Ω, 600mA ferrite bead Murata BLM41PG600SH1                            |
| FB2, FB3      |     0 | Not installed, ferrite beads- short (PCB trace)                         |
| JU1-JU5       |     5 | 3-pin headers                                                           |
| JU6, JU7      |     2 | 2-pin headers                                                           |
| L1            |     1 | 1.2µH, 12.5A inductor Coilcraft XAL5030-122ME                           |
| L2            |     1 | 1µH, 8.7A inductor Coilcraft XAL4020-102ME                              |
| L3            |     1 | 0.6µH, 10.4A inductor Coilcraft XAL4020-601ME                           |
| N1, N2        |     2 | 40V, 18A, 26mΩ n-channel power trench MOSFETs Fairchild FDMC8015L       |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corp.                              | 864-967-2150 | www.avx.com                 |
| Coilcraft Inc.                         | 847-639-6400 | www.coilcraft.com           |
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| NXP Semiconductors                     | 408-474-8142 | www.nxp.com                 |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay Dale                            | 402-563-6866 | www.vishay.com              |

Note:

Indicate that you are using the MAX16993 when contacting these component suppliers.

Evaluates: MAX16993

* EP = Exposed pad.

| DESIGNATION     |   QTY | DESCRIPTION                                                                                           |
|-----------------|-------|-------------------------------------------------------------------------------------------------------|
| R1-R3, R7, R22  |     5 | 0Ω ±5% resistors (0402)                                                                               |
| R4-R6, R20, R21 |     5 | Not installed, resistors (0402)                                                                       |
| R8              |     1 | 22kΩ ±1% (0402) Panasonic ERJ-2RKF2202X                                                               |
| R9-R11, R13     |     4 | 5.1kΩ ±5% resistors (0402)                                                                            |
| R12, R14        |     2 | 100kΩ ±5% resistors (0603)                                                                            |
| R15             |     1 | 10Ω ±1% resistor (0402)                                                                               |
| R16             |     1 | 10kΩ ±1% resistor (0402)                                                                              |
| R17             |     1 | 20kΩ ±1% resistor (0402)                                                                              |
| R18             |     1 | 75kΩ ±1% resistor (0402)                                                                              |
| R19             |     1 | 24kΩ ±1% resistor (0402)                                                                              |
| RCS             |     1 | 15mΩ ±1% sense resistor (1206) Vishay Dale WSL1206R0150FEA                                            |
| U1              |     1 | Step-down controller with dual 2.1MHz step-down DC-DC converters (32 TQFN-EP*) Maxim MAX16993AGJA/VY+ |
| -               |     7 | Shunts                                                                                                |
| -               |     1 | PCB: MAX16993 EVKIT                                                                                   |

│

## MAX16993 Evaluation Kit

## Quick Start

## Recommended Equipment

- MAX16993	EV	kit
- 3.5V	to	36V,	4A	DC	power	supply
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Verify  that  a  shunt  is  installed  across  pins  1-2  on jumpers JU1-JU3 and JU5-JU7.

## Table 1. Jumper Descriptions (JU1-JU7)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                      |
|----------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | Connects EN1 to VBAT through a pullup resistor (normal operation).                                                                                                               |
| JU1      | 2-3              | Connects EN1 to PGND (shutdown).                                                                                                                                                 |
| JU2      | 1-2*             | Connects EN2 to BIAS (Buck 2 enabled).                                                                                                                                           |
| JU2      | 2-3              | Connects EN2 to PGND (Buck 2 disabled).                                                                                                                                          |
| JU3      | 1-2*             | Connects EN3 to BIAS (Buck 3 enabled).                                                                                                                                           |
| JU3      | 2-3              | Connects EN3 to PGND (Buck 3 disabled).                                                                                                                                          |
| JU4      | 1-2              | Connects SSEN to BIAS, enabling spread-spectrum operation.                                                                                                                       |
| JU4      | 2-3*             | Connects SSEN to PGND, disabling spread-spectrum operation.                                                                                                                      |
| JU5      | 1-2*             | Connects SYNC to BIAS to enable continuous PWM mode.                                                                                                                             |
| JU5      | 2-3              | Connects SYNC to PGND to enable skip mode under light-load conditions.                                                                                                           |
| JU5      | Open             | When SYNC is unconnected, or when a clock source is present, continuous PWM mode is enabled. SYNC can be used to synchronize with other supplies when a clock source is present. |
| JU6      | Closed*          | Connects RESET2 to VOUT1 through a pullup resistor, making the RESET2 output a logic level signal.                                                                               |
| JU6      | Open             | Disconnects RESET2 from VOUT1, leaving RESET2 as an open-drain output.                                                                                                           |
| JU7      | Closed*          | Connects RESET3 to VOUT1 through a pullup resistor, making RESET3 output a logic level signal.                                                                                   |
| JU7      | Open             | Disconnects RESET3 from VOUT1, leaving RESET3 as an open-drain output.                                                                                                           |

Evaluates: MAX16993

- 2)  Verify  that  a  shunt  is  installed  across  pins  2-3  on jumper JU4.
- 3)  Connect the positive terminal of the power supply to the VBAT PCB pad. Connect the negative terminal of the power supply to the PGND PCB pads closest to VBAT.
- 4)  Set the power-supply VIN to 14V.
- 5)  Turn on the power supply and verify that the Buck 1 output (VOUT1) is 5V.
- 6)  Verify that the Buck 2 output (VOUT2) is 3.3V.
- 7)  Verify that the Buck 3 output (VOUT3) is 1.2V.

│

## Detailed Description of Hardware

The  MAX16993  EV  kit  comes  fully  assembled  and tested  with  all  the  components  necessary  to  evaluate the  MAX16993  step-down  controller  with  dual  2.1MHz step-down DC-DC converters. The EV kit comes with a MAX16993AGJA/VY+  32-pin  side-wettable  TQFN-EP device  installed.  However,  other  MAX16993  variants can be evaluated on the same EV kit with some simple modifications. Refer to the MAX16993 IC data sheet for additional  information  regarding  component  selection when altering the EV kit.

## High-Voltage Controller, Buck 1

Buck 1 is a high-voltage, step-down controller designed to operate with a 3.5V to 36V input voltage range. Buck 1 is configured for a 5V output and up to 5A load current. To change the Buck 1 output voltage to a fixed 3.3V, remove R7	and	populate	R6	with	a	0Ω	resistor.

The  Buck  1  switching  frequency  can  be  configured  for 2.1MHz  or  the  factory-trimmed  divide-down  frequency of  420kHz.  By  default,  Buck  1  is  configured  to  operate at  2.1MHz.  To  change  the  Buck  1  switching  frequency to	 420kHz,	 remove	 R22	 and	 populate	 R21	 with	 a	 0Ω resistor.  The  switching  frequencies  of  Buck  2  and  Buck 3  are  not  affected  by  the  CSEL1  input.  For  additional information,  refer  to  the Buck  1  Clock  Select  (CSEL1) section in the MAX16993 IC data sheet.

## Low-Voltage Converters, Buck 2 and Buck 3

Buck 2 and Buck 3 are low-voltage, synchronous stepdown  converters  designed  to  operate  directly  from  the Buck  1  output.  Buck  2  is  configured  for  a  3.3V  output and Buck 3 is configured for a 1.2V output. Both Buck 2 and Buck 3 have a maximum output current of 3A. The

## Evaluates: MAX16993

output voltages are configurable between 0.8V and 3.6V by resistor-dividers. Refer to the OUT2/OUT3 Adjustable Output-Voltage Option section in the MAX16993 IC data sheet for additional information.

## Spread-Spectrum Operation (JU4)

The  EV  kit  features  a  pin-selectable  spread-spectrum mode  of  operation.  Jumper  JU4  enables  or  disables spread-spectrum operation (see Table 1).

## Synchronization Input (JU5)

The  EV  kit's  SYNC  input  allows  synchronization  to  an external  clock.  When  synchronizing  the  device  to  an external clock, leave jumper JU5 unconnected. For fixedfrequency PWM mode operation, connect a shunt across pins  1-2  on  JU5.  For  skip  mode  operation,  connect  a shunt across pins 2-3 on JU5.

## Reset Outputs

The EV kit features individual RESET\_ outputs for each buck  that  assert  low  when  the  buck  output  drops  6% below  the  regulated  voltage. RESET\_ remains  low  for a  fixed  timeout  period  of  3.9ms  after  the  buck  output rises  up  to  its  regulated  voltage. RESET1 has  a  pullup resistor,  making  it  a  logic-level  output. RESET2 and RESET3 are  either  logic-level  or  open-drain  outputs, depending on jumpers JU6 and JU7 (see Table 1).

## Thermal Warning

The  EV  kit  features  a  thermal-warning  indicator  output. The ERR output asserts low when the junction temperature on the IC exceeds +145°C (typ). The thermal-warning indicator has a typical hysteresis of 15°C.

## Evaluates: MAX16993

Figure 1. MAX16993 EV Kit Schematic

<!-- image -->

Figure 2. MAX16993 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX16993 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX16993 EV Kit PCB Layout-Layer 2

<!-- image -->

Figure 5. MAX16993 EV Kit PCB Layout-Layer 3

<!-- image -->

## Evaluates: MAX16993

Figure 6. MAX16993 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX16993 EV Kit Component Placement GuideSolder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16993EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX16993

## MAX1693 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------|-----------------|
|                 0 | 4/13            | Initial release                                                            | -               |
|                 1 | 2/14            | Corrected typo and updated values in BOM                                   | 1-5             |
|                 2 | 10/14           | Changed output voltage from 1.8V to 1.2V and R16 value from 25.5kΩ to 10kΩ | 1-5             |

For information on other Maxim Integrated products, visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Ma[im	Integrated	reserves	the	right	to	change	the	circuitry	and	specifications	without	notice	at	any	time.

<!-- image -->

│

Evaluates: MAX1693