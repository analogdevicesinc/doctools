<!-- lastmod 2023-03-29 -->
<!-- image -->

Evaluates: MAXM17572 in

5V Output Application

## General Description

The  MAXM17572  5V  output  evaluation  kit  (EV  kit) provides  a  proven  design  to  evaluate  the  MAXM17572 high-voltage,  high-efficiency,  synchronous  step-down DC-DC  power  module.  The  EV  kit  is  programmed  for 5V output and delivers load currents up to 1A. The pro -grammed  switching  frequency  is  900kHz  for  optimum efficiency  and  component  size.  The  EV  kit  features  an adjustable  input  under-voltage  lockout,  adjustable  softstart,  open-drain RESET signal,  and  external  frequency synchronization.  The  MAXM17572  module  data  sheet provides a complete description, features, benefits, and parameters of the part that should be read in conjunction with this EV kit data sheet prior to operating the EV kit.

## Features

- Wide 7.0V to 60V Input Range
- Programmed 5V output, up to 1A Output Current
- High 89.4% Efficiency (VIN = 24V, VOUT = 5V at 0.7A)
- 900kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Programmed 1ms Soft-Start Time
- PWM Mode of Operation
- Open-Drain RESET Output
- External Frequency Synchronization
- Overcurrent and Overtemperature Protection
- Low-Profile, Surface-Mount Components
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR32 (EN55032) Class B Conducted and Radiated Emissions

Click here to ask an associate for production status of specific part numbers.

## MAXM17572 5V Output Evaluation Kit

## Quick Start

## Recommended Equipment

- One 0V to 60V DC, 2A Power Supply
- Resistive load with 1.0A sink capacity
- Four Digital Multimeters (DMM)
- One MAXM17572EVKIT# EV kit

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps to verify the board operation.

Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Set the input power supply at a voltage between 7.0V and 60V. Disable the power supply.
- 2) Connect the positive terminal of the power supply to the  VIN\_EMI  pad  and  the  negative  terminal  to  the nearest  GND  pad.  Connect  the  positive  terminal  of the 1.0A resistive load to the VOUT pad and the nega -tive terminal to the nearest GND pad.
- 3) Connect  a  DMM  in  voltage  measurement  mode across the VOUT pad and the nearest GND pad.
- 4) Verify the shunt is installed across pin 1-2 on jumper JU1 (see Table 1 for details).
- 5) Verify  that  shunts  are  not  installed  on  jumper  JU2 (see Table 2 for details).
- 6) Turn on the input power supply.
- 7) Enable the load.
- 8) Verify  that  DMM  displays  5V  across  the  output terminals.

Ordering Information appears at end of data sheet.

## MAXM17572 5V Output Evaluation Kit

## Detailed Description

The MAXM17572 EV kit is designed to demonstrate the salient  features  of  the  MAXM17572 power module. The MAXM17572 provides an option to always enable or dis -able output through the JU2 setting. Also, the converter can be turned on at desired input voltage with appropri -ate values of R2 and R3. The RT/SYNC pad provides an interface for synchronizing the device switching with the external clock. An additional RESET pad is available for monitoring output voltage regulation status.

On the bottom layer of the EV kit, additional footprints for optional components are included to ease board modifica -tion for different input/output configurations. Placeholders are also available on the bottom layer for the installation of EMI filter components. EMI component values are pro -vided in the MAXM17572 5V EV Kit Schematic Diagram .

## Setting the Switching Frequency

Selection  of  switching  frequency  must  consider  input voltage  range,  desired  output  voltage,  t ON\_MIN  of  the MAXM17572,  and  ambient  temperature.  For  optimal performance,  a  switching  frequency  of  900kHz  is  cho -sen for 5V output. Resistor R1, connected between RT/ SYNC and SGND pins, programs the desired switching frequency. Referring to Table 2. Selection of Components Values in the MAXM17572 datasheet, R1 is chosen to be 21.5kΩ. Refer to Table 2 in  the  MAXM17572 datasheet to see the various switching frequency recommendations optimized for various designs.

## Output Capacitor Selection

X7R ceramic output capacitors are preferred due to their stability  over  the  temperature  in  industrial  applications. Refer  to Table  2 in  the  MAXM17572  datasheet  to  see a summary of the choice of output capacitor for various requirements. Using this table, the output capacitor (C13) for this EV kit is chosen to be 22μF/25V.

## Adjusting Output Voltage

The MAXM17572 supports an adjustable output voltage range,  from  0.9V  to  12V.  To  program  the  different  out -put  voltages,  use  appropriate  feedback  resistive  divider connected between OUT, FB, and GND based on Table 2  in  MAXM17572  datasheet.  R7  and  R8  of  the  EV  Kit

## Evaluates: MAXM17572 in 5V Output Application

correspond to RU and RB in Table 2 of the MAXM17572 datasheet.

## Soft-Start Programming

MAXM17572  offers  an  adjustable  soft-start  function  to limit inrush current during startup. A capacitor connected from  the  SS  pin  to  SGND  programs  the  soft-start  time. The Soft-start time (t SS ) is related to the capacitor con -nected at SS (C11) by the following equation:

<!-- formula-not-decoded -->

This EV kit is programmed for a 1ms soft-start time, with C11 = 5.6nF.

## Enable/Under Voltage Lock-out (EN/UVLO) programming

The EV kit includes a resistive voltage divider, formed by R2 and R3, connected from VIN to SGND to turn on the device at the required input voltage (V INU ). R2 is selected as  3.3MΩ.  By  adjusting  R3  the  input  voltage  turn-on threshold level is programmed using the below equation.

<!-- formula-not-decoded -->

Where R3 is in MΩ.

For MAXM17572 to turn ON at 7V input, the Resistor (R3) is calculated as 698kΩ.

## External Clock Synchronization (RT/SYNC)

The  EV  kit  includes  the  RT/SYNC  pad  for  applying  an external clock signal to synchronize with the internal oscil -lator. The applied external synchronization clock frequen -cy must be between 1.1 x f SW  and 1.4 x f SW , where f SW is  the  frequency  programmed  by  the  R1  resistor  of  the EV kit.  For  further  information  refer  to  the  MAXM17572 datasheet.

## EXTVCC Linear Regulator

The EV kit provides jumper JU1 to power the VCC from VOUT through the EXTVCC function. Bootstrapping the VCC with EXTVCC improves the efficiency at higher input voltages. If the output voltage is greater than 4.7V (typ), connect  the  OUT  terminal  to  EXTVCC  using  JU1.  See Table 1 for more details.

## MAXM17572 5V Output Evaluation Kit

## Electro-Magnetic Interference (EMI)

Compliance  to  Conducted  Emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency currents are drawn by the switching power converter and limits the noise injected back into the input power source.

The MAXM17572 EV kit PCB has designated footprints on the bottom side for the placement of EMI filter com -ponents. Use of EMI filter components as shown in the schematic  results  in  lower  conducted  emissions,  below CISPR32 Class B limits. Cut open the trace at L1, before installing EMI filter components. The EV kit PCB layout is also designed to limit radiated emissions from switching

Table 1. EXTVCC Configuration (JU1)

| POSITION   | EXTVCC PIN        | INTERNAL REGULATOR INPUT   |
|------------|-------------------|----------------------------|
| 1-2*       | Connected to VOUT | VCC is powered from EXTVCC |
| 2-3        | Connected to SGND | VCC is powered from VIN    |

* Default position

Evaluates: MAXM17572 in 5V Output Application

nodes of the power converter, resulting in radiated emis -sions below CISPR32 Class B limits.

## Hot-Plug-In and Long input cables

The  EV  Kit  PCB  provides  an  electrolytic  capacitor  (C2, 22µF/100V)  at  the  input  terminals.  This  input  capacitor limits  the  peak  voltage  at  the  input  of  the  MAXM17572 Power Module, when the DC input source is Hot-Plugged to the EV kit input terminals with long input cables. The Equivalent  Series  Resistance  (ESR)  of  the  Electrolytic capacitor  damps  the  oscillations  caused  by  the  interac -tion  of  the  Inductance  of  the  long  input  cables,  and  the ceramic capacitors at the Power Module Input.

Table 2. EN/UVLO Configuration (JU2)

| POSITION       | EN/UVLO PIN                                                | INTERNAL REGULATOR INPUT                             |
|----------------|------------------------------------------------------------|------------------------------------------------------|
| Not Installed* | Connected to the center node of resistor-divider R2 and R3 | Programmed to startup at desired input voltage level |
| 1-2            | Connected to VIN                                           | Enabled                                              |
| 2-3            | Connected to SGND                                          | Disabled                                             |

* Default position

## MAXM17572 5V Output Evaluation Kit

## EV Kit Performance Report

(VIN = 24V, VOUT = 5V, IOUT = 1.5A, T A = +25ºC. All voltages are referenced to SGND, unless otherwise noted.)

<!-- image -->

Evaluates: MAXM17572 in

5V Output Application

## MAXM17572 5V Output Evaluation Kit

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAXM17572EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAXM17572 5V EV Kit Bill of Materials

|   S NO | DESIGNATION   |   QTY | DESCRIPTION                                         | MANUFACTURER PARTNUMBER        |
|--------|---------------|-------|-----------------------------------------------------|--------------------------------|
|      1 | C1            |     1 | 100pF±10%, 50V, C0G Ceramic Capacitor (0402)        | TDK C1005C0G1H101K050BA        |
|      2 | C2            |     1 | 22µF±20%, 100V, Aluminum Capacitor                  | PANASONIC EEE-TG2A220UP        |
|      3 | C3            |     1 | 2.2µF±10%, 10V, X7R Ceramic Capacitor (0603)        | MURATA GRM188R71A225KE15       |
|      4 | C4, C10       |     2 | 0.1µF±10%, 100V, X7R Ceramic Capacitor (0603)       | MURATA GRM188R72A104KA35       |
|      5 | C5            |     1 | 4.7µF±10%, 100V, X7R Ceramic Capacitor (1206)       | MURATA GRM31CZ72A475KE11       |
|      6 | C6            |     1 | 47pF±5%, 50V, C0G Ceramic Capacitor (0402)          | YAGEO CC0402JRNPO9BN470        |
|      7 | C7            |     1 | OPEN, 150pF±5%, 100V, C0G Ceramic Capacitor (0402)  | TDK C1005C0G2A151J050BA        |
|      8 | C8            |     1 | OPEN, 1µF±10%, 100V, X7R Ceramic Capacitor (1206)   | TAIYO YUDEN HMK316B7105K       |
|      9 | C9, C17       |     2 | OPEN, 220pF±10%, 100V, X7R Ceramic Capacitor (0402) | MURATA GRM155R72A221KA01       |
|     10 | C11           |     1 | 5600pF±10%, 50V, X7R Ceramic Capacitor (0402)       | KEMET C0402C562K5RAC           |
|     11 | C12           |     1 | OPEN (1206)                                         |                                |
|     12 | C13           |     1 | 22µF±10%, 25V, X7R Ceramic Capacitor (1210)         | MURATA GRM32ER71E226KE15       |
|     13 | C14, C16      |     2 | 0.1µF±10%, 50V, X7R Ceramic Capacitor (0402)        | MURATA GRM155R71H104KE14       |
|     14 | C15           |     1 | 0.1µF±5%, 10V, X7R Ceramic Capacitor (0402)         | MURATA GRM155R71A104JA01       |
|     15 | D1            |     1 | Diode, PIV=20V; IF=0.5A                             | ON SEMICONDUCTOR NSR05F20NXT5G |
|     16 | JU1, JU2      |     2 | 3-pin header (2.54mm )                              | SULLINS PCC03SAAN              |
|     17 | L1            |     1 | OPEN (10µH ±20%, 0.83A Inductor)                    | MURATA LQH2HPZ100MJR           |
|     18 | R1            |     1 | 21.5kΩ ±1% Resistor (0402)                          | PANASONIC ERJ-2RKF2152         |
|     19 | R2            |     1 | 3.3MΩ ±5% Resistor (0402)                           | PANASONIC ERJ-2GEJ335          |
|     20 | R3            |     1 | 698kΩ ±1% Resistor (0402)                           | PANASONIC ERJ-2RKF6983         |
|     21 | R4            |     1 | 1kΩ ±1% Resistor (0402)                             | VISHAY DALE CRCW04021K00FK     |
|     22 | R5            |     1 | 10kΩ ±1% Resistor (0402)                            | VISHAY DALE CRCW040210K0FK     |
|     23 | R6            |     1 | 4.7Ω ±5% Resistor (0402)                            | PANASONIC ERJ-2GEJ4R7          |
|     24 | R7            |     1 | 118kΩ ±1% Resistor (0402)                           | PANASONIC ERJ-2RKF1183         |
|     25 | R8            |     1 | 25.5kΩ ±1% Resistor (0402)                          | VISHAY DALE CRCW040225K5FK     |
|     26 | SU1, SU2      |     2 | Jumper Socket (2.54mm)                              | SULLINS STC02SYAN              |
|     27 | U1            |     1 | MAXM17572, 12-pin uSLIC Power Module                | MAXIM INTEGRATED MAXM17572AMC+ |

Evaluates: MAXM17572 in

5V Output Application

## Component Suppliers

| SUPPLIER        | WEBSITE               |
|-----------------|-----------------------|
| Murata Americas | www.murata.com        |
| Panasonic Corp. | www.panasonic.com     |
| Taiyo Yuden     | www.yuden.co.jp/or/   |
| TDK Corp.       | www.component.tdk.com |

Note: Indicate that you are using MAXM17572 when contacting these component suppliers.

## MAXM17572 5V EV Kit Schematic Diagram

<!-- image -->

Evaluates: MAXM17572 in 5V Output Application

## MAXM17572 5V Output Evaluation Kit

## MAXM17572 5V EV Kit PCB Layout Diagrams

<!-- image -->

MAXM17572 5V EV Kit Component Placement GuideComponent Side

MAXM17572 5V EV Kit PCB Layout-Top Layer

<!-- image -->

MAXM17572 5V EV Kit PCB Layout-Layer 2

<!-- image -->

Evaluates: MAXM17572 in

5V Output Application

## MAXM17572 5V EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAXM17572 5V EV Kit PCB Layout-Layer 3

MAXM17572 5V EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAXM17572 5V EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

Evaluates: MAXM17572 in

5V Output Application

## MAXM17572 5V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/21            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAXM17572 in

5V Output Application