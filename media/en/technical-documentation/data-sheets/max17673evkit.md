<!-- lastmod 2022-08-02 -->
## MAX17673EVKIT# Evaluation Kit

## General Description

The MAX17673EVKIT# evaluation kit (EV kit) provides a proven design to evaluate the MAX17673 60V, 1.5A high efficiency,  synchronous  buck  converter  with  integrated, dual 5V, 1A buck converters. The EV kit is preset for 5V output at a load current of up to 1.5A from the high volt -age (HV) buck converter, and 3.3V and 1.8V outputs at load  currents  up  to  1A  each  from  the  low  voltage  (LV) buck converters. The HV buck converter is programmed to  operate  at  400kHz,  and  the  LV  buck  converters  are programmed to operate at 2MHz, for optimum efficiency and  component  sizes.  The  output  of  the  HV  buck  con -verter is connected to the input of the LV buck converters. The EV kit  features  adjustable  input  undervoltage  lock -out and soft-start for the HV buck converter, and Power OK  (POK\_)  signals  for  all  three  buck  converters.  The MAX17673 IC data sheet provides a complete descrip -tion of the part that should be read in conjunction with this data sheet prior to operating the EV kit.

Ordering Information appears at end of data sheet.

## Evaluates: MAX17673 5V, 3.3V, 1.8V Output Applications

## Features

- Three Synchronous DC-DC Buck Converter Outputs from a Single HV input
- Wide 7V to 60V Input Range for HV Converter
- Optional External Supply Input connections for LV Converters (4.5V to 5.5V for LVA, and 2.7V to 5.5V for LVB)
- Programmed 5V/1.5A Output for HV Buck and 3.3V/1A &amp; 1.8V/1A Output for LV Buck Converters
- 400KHz Switching Frequency for HV Buck and 2MHz Switching Frequency for LV Buck
- High 93% Efficiency (V INH = 12V, VOUT = 5V at 0.45A) for HV Buck. 94% Efficiency for LV Buck
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold for HV Buck Converter
- Programmed 1ms Soft-Start Time for HV Buck Converter, and Internal 4096 Clock Cycles Soft-Start Time for LV Buck Converters
- Selectable PWM and PFM Modes of Operation
- Independent Power OK (POK\_) Outputs for the Three Converters
- Overcurrent and Overtemperature Protection
- Low-Profile, Surface-Mount Components
- Proven PCB Layout
- Fully Assembled and Tested

EV kit specifications, settings, benefits and features are highlighted.  For  full  MAX17673  features,  benefits  and parameters, refer to the MAX17673 data sheet.

<!-- image -->

## MAX17673EVKIT# Evaluation Kit

## Quick Start

## Required Equipment

- One MAX17673EVKIT# EV kit
- One 0V to 60V DC, 3A power supply
- One load resistor capable of sinking up to 0.3A at 5V
- Two load resistors capable of sinking up to 1A at 3.3V and 1.8V, respectively
- Digital multimeters (DMM)

## Equipment Setup and Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

## Caution: Do not turn on power supply until all connections are completed.

- 1) Set the input power supply at a voltage between 7V and 60V. Disable the power supply.
- 2) Connect the positive terminal of the power supply to the VIN\_EMI pad, and the negative terminal to the nearest PGND pad on the EV Kit. The output of the HV buck converter (VOUT) is connected to the LV buck input using Jumper JU2 and JU3 (see Table 1 for details).
- 3) Connect a 1A resistive load across OUTA (3.3V) and its nearest PGND pad.
- 4) Connect a 1A resistive load across OUTB (1.8V) and its nearest PGND pad.
- 5) Connect a 0.3A resistive load across OUTA (5V) and its nearest PGND pad.
- 6) Select the shunt position on jumper JU1 according to the intended mode of operation (see Table 2 for details).
- 7) Connect digital multimeters (in voltage measurement mode) across the VOUT, OUTA, OUTB pads and their nearby PGND pads.
- 8) Turn on the input power supply.
- 9) Verify that the DMMs display 5V across the VOUT terminal, 3.3V across the OUTA terminal and 1.8V across the OUTB terminal with respect to PGND.

## Detailed Description

The  MAX17673  EV  kit  is  designed  to  demonstrate  the salient  features  of  the  MAX17673  60V,  1.5A  high  effi -ciency, synchronous buck converter with integrated, dual 5V, 1A buck converters. The EV kit includes Jumper JU1

## Evaluates: MAX17673 5V, 3.3V, 1.8V Output Applications

to operate the MAX17673 in PWM mode or PFM mode, based on light-load performance requirements. Jumpers JU2 and JU3 connect the LV Buck Converter  inputs  to either the HV buck output (VOUT), or to external INA and INB Inputs. POKH, POKA, or POKB pads are available for monitoring the status of output voltages.

On the  bottom  layer  of  the  EV  Kit,  additional  footprints for  optional  components  are  included  to  ease  board modification for different input and output configurations. Placeholders  are  also  available  on  the  bottom  layer  for placement of EMI filter components.

## Setting Switching Frequency

Selection  of  the  switching  frequency  must  consider  the input  voltage  range,  desired  output  voltages,  tON(MIN) of  the  three  buck  converters  in  MAX17673,  and  ambient temperature. To optimize efficiency and component size, a 400kHz switching frequency is chosen for the 5V HV buck converter, and 2MHz switching frequency is chosen for the 3.3V and 1.8V LV buck converters. Resistor R5 connected between the RT and SGND plane, programs the desired switching frequency of LV buck converters. The HV buck converter  switching  frequency  is  derived  as  a  fraction  of the  LV  buck  converters  switching  frequency  by  placing Resistor R10 between the FDIV and SGND pins. Use the Switching Frequency Selection section of MAX17673 data sheet to choose different values of R5 and R10. In the EV kit, R5 is left open, and R10 is set to 0Ω.

## Soft Start Programming

The EV kit offers an adjustable soft-start function on the MAX17673 HV buck converter to limit inrush current dur -ing  startup.  The  soft-start  time  is  adjusted  by  changing the value of C13, the external capacitor from the SSH pin to  SGND. The selected output capacitance (CSEL) and the HV buck converter output voltage (VOUT) determine the  minimum  value  of  C13,  as  shown  by  the  following equation:

<!-- formula-not-decoded -->

Where C SEL  is the sum output capacitance, in µF, con -nected at the output of the HV buck converter (includes C21, C23, C4, C5, C6 and C7 on the EV kit), and V OUT is the output voltage in Volts.

The soft-start time (t SS ) is related to the soft-start capaci -tor C13 by the following equation:

<!-- formula-not-decoded -->

For example, in order to program a 1ms soft-start time, C13 should be 5600pF.

## MAX17673EVKIT# Evaluation Kit

## Enable/Undervoltage Lockout (ENH) Programming

The MAX17673 EV kit includes a resistive voltage-divider, formed by R18 and R19, connected from VIN to SGND to turn on the device when the input voltage is more than 7V. Adjusting R19 creates different input voltage turn-on threshold levels.

Choose R18 to be 3.3MΩ and then calculate R19 as fol -lows:

<!-- formula-not-decoded -->

where R19 is in MΩ.

For MAX17673 to turn on at 7.0V input, the Resistor (R19) is calculated to be 715kΩ.

## Mode of Operation

The MAX17673 EV kit offers jumper (JU1) to program the device  to  operate  in  PWM  and  PFM  mode.  Connecting the  MODE/SYNC pin to SGND plane operates the part in PWM operation. Connecting the MODE pin to V CC, or leaving the MODE pin open, enables the part to operate in PFM mode. The chosen operating mode applies to all the three regulators. Table 2 shows the EV kit jumper (JU1) settings that can be used to configure the desired mode of operation.

## Adjusting Output Voltage

The MAX17673 EV kit offers independent control of out -put voltages, by allowing individual sense and feedback inputs.  Adjusting  the  output  voltages  in  the  three  buck converters requires redesign and appropriate selection of input  capacitors,  output  capacitors,  and  feedback  resis -tive dividers. Refer to the MAX17673 data sheet for more details regarding selection of input and output capacitors, and programming the output voltage.

## Evaluates: MAX17673 5V, 3.3V, 1.8V Output Applications

## EXTVCC Linear Regulator

Powering  the  MAX17673  from  OUT  through  EXTVCC increases  the  efficiency  at  higher  input  voltages.    The MAX17673  EV  Kit  includes  resistor  R17  to  connect EXTVCC to OUT, by default.  To disable this feature, unin -stall R17 resistor, and install a 0Ω resistor at R15.

## Hot Plug-In and Long Input Cables

The  MAX17673  EV  kit  PCB  provides  an  optional  elec -trolytic  capacitor  (C1,  10uF/100V).  This  capacitor  limits the peak voltage at the input of the MAX17673 IC when the DC input source is 'Hot-Plugged' to the EV kit input terminals  with  long  input  cables.  The  equivalent  series resistance  (ESR)  of  the  electrolytic  capacitor  dampens the  oscillations  caused  by  interaction  of  the  input  cable inductance, and input ceramic capacitors.

## Table 1. Input Selection for LV Buck Converters (JU2 and JU3)

| POSITION   | INA/INB PIN                    |
|------------|--------------------------------|
| 2-3*       | Connected to HV Buck Output    |
| 1-2        | Connected to INA/INB Terminals |

* Default position.

## Table 2. Mode of Operation (JU1)

| POSITION   | MODE PIN              |
|------------|-----------------------|
| 1-2        | PFM mode of operation |
| 1-3*       | PWM mode of operation |

* Default position.

## EV KIT Performance Report

(V INH = 24V, V INA  = V INB  = 5V, f SW\_LV  = 2MHz, f SW\_HV = 400kHz, T A = 25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## EV KIT Performance Report (continued)

(V INH = 24V, V INA  = V INB  = 5V, f SW\_LV  = 2MHz, f SW\_HV = 400kHz, T A = 25°C, unless otherwise noted.)

<!-- image -->

## EV KIT Performance Report (continued)

(V INH = 24V, V INA  = V INB  = 5V, f SW\_LV  = 2MHz, f SW\_HV = 400kHz, T A = 25°C, unless otherwise noted.)

<!-- image -->

## EV KIT Performance Report (continued)

(V INH = 24V, V INA  = V INB  = 5V, f SW\_LV  = 2MHz, f SW\_HV = 400kHz, T A = 25°C, unless otherwise noted.)

<!-- image -->

## Component Suppliers

| SUPPLIER        | WEBSITE               |
|-----------------|-----------------------|
| Murata Americas | www.murata.com        |
| Coilcraft       | www.coilcraft.com     |
| Vishay          | www.vishay.com        |
| TDK Corp.       | www.component.tdk.com |

Note:

Indicate that you are using the MAX17673 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17673EVKIT# | EVKit  |

# Denotes RoHS compliant.

Evaluates: MAX17673 5V, 3.3V, 1.8V

## MAX17673 EV Kit Bill of Materials

|   ITEM |   QTY | REF DES       | DESCRIPTION                                   | MANUFACTURE PART NUMBER -1     | MANUFACTURE PART NUMBER -2          |
|--------|-------|---------------|-----------------------------------------------|--------------------------------|-------------------------------------|
|      1 |     1 | C1            | 10µF±20%,100V, Aluminum Capacitor             | EEE-TG2A100P                   |                                     |
|      2 |     3 | C6, C7, C16   | 2.2uF±10%, 10V, X7R Ceramic Capacitor (0603)  | MURATA GRM188R71A225KE15;      | TDK C1608X7R1A225K080AC             |
|      3 |     2 | C9, C11       | 22uF±20%, 6.3V, X7R Ceramic Capacitor (0805)  | MURATA GRM21BZ70J226ME44       |                                     |
|      4 |     1 | C13           | 5600pF±10%, 25V, X7R Ceramic Capacitor (0402) | MURATA GRM155R71E562KA01       | VENKEL LTD C0402X7R250-562KNE       |
|      5 |     2 | C14, C22      | 0.1uF±10%, 100V, X7R Ceramic Capacitor (0603) | MURATA GCJ188R72A104KA01       | YAGEO CC0603KRX7R0BB104             |
|      6 |     1 | C17           | 0.1uF±10%, 16V, X7R Ceramic Capacitor (0402)  | TDK C1005X7R1C104K050BC        | AVX 0402YC104KAT2A                  |
|      7 |     1 | C18           | 1uF±10%, 6.3V, X7R Ceramic Capacitor (0402)   | MURATA GRM155R70J105KA12       | SAMSUNG ELECTRONICS CL05B105KQ5NQNC |
|      8 |     1 | C23           | 22uF±10%, 10V, X7R Ceramic Capacitor (1210)   | MURATA GRM32ER71A226K          |                                     |
|      9 |     1 | C24           | 4.7uF±10%, 100V, X7R Ceramic Capacitor (1206) | MURATA GRM31CZ72A475KE11       |                                     |
|     11 |     1 | L1            | 1.5uH±20%, SMD Inductor, 2.43A                | VISHAY DALE IHHP1008ABER1R5M01 |                                     |
|     12 |     1 | L2            | 2.2uH±20%, SMD Inductor, 2.0A                 | VISHAY DALE IHHP1008ABER2R2M01 |                                     |
|     13 |     1 | L4            | 22uH±20%, SMD Inductor, 5.0A                  | COILCRAFT XAL6060-223ME        |                                     |
|     14 |     1 | R1            | 12.1kΩ ±1%, Resistor (0402)                   | Generic                        |                                     |
|     15 |     3 | R2-R4         | 100kΩ ±1%, Resistor (0402)                    | Generic                        |                                     |
|     16 |     1 | R6            | 8.66kΩ ±1%, Resistor (0402)                   | Generic                        |                                     |
|     17 |     1 | R7            | 9.76kΩ ±1%, Resistor (0402)                   | Generic                        |                                     |
|     18 |     1 | R8            | 2.87kΩ ±1%, Resistor (0402)                   | Generic                        |                                     |
|     19 |     3 | R10, R12, R13 | 0Ω, Resistor (0402)                           | Generic                        |                                     |
|     20 |     1 | R14           | 54.9kΩ ±1%, Resistor (0402)                   | Generic                        |                                     |
|     21 |     1 | R16           | 249kΩ ±1%, Resistor (0402)                    | Generic                        |                                     |
|     22 |     1 | R17           | 1Ω ±1%, Resistor (0402)                       | Generic                        |                                     |
|     23 |     1 | R18           | 3.3MΩ ±1%, Resistor (0603)                    | Generic                        |                                     |
|     24 |     1 | R19           | 715kΩ ±1%, Resistor (0402)                    | Generic                        |                                     |
|     26 |     1 | U1            | MAX17673ATI+, 28 pin TQFN, 5mm x5mm           | MAX17673ATI+                   |                                     |

## MAX17673 EV Kit Schematic

<!-- image -->

## MAX17673EVKIT# Evaluation Kit

## MAX17673 EV Kit PCB Layout

MAX17673 EV Kit-Top Silkscreen

<!-- image -->

MAX17673 EV Kit-Layer-2

<!-- image -->

## Evaluates: MAX17673 5V, 3.3V, 1.8V Output Applications

MAX17673 EV Kit-Top Layer

<!-- image -->

MAX17673 EV Kit-Layer-3

<!-- image -->

## MAX17673EVKIT# Evaluation Kit

## MAX17673 EV Kit PCB Layout (continued)

MAX17673 EV Kit-Bottom Layer

<!-- image -->

## Evaluates: MAX17673 5V, 3.3V, 1.8V Output Applications

MAX17673 EV Kit-Bottom Silkscreen

<!-- image -->

## MAX17673EVKIT# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/18           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17673 5V, 3.3V, 1.8V

Output Applications