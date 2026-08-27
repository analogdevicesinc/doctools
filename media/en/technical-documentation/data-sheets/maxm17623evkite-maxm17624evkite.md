<!-- lastmod 2022-08-05 -->
<!-- image -->

Click here to ask an associate for production status of specific part numbers.

## Evaluates: MAXM17623/MAXM17624

## Modules in Application

## General Description

The  MAXM17623/MAXM17624 evaluation kits  (EV  kits) provide a proven design to evaluate the performance of the  MAXM17623/MAXM17624  modules.  Each  of  these modules are configured to demonstrate optimum perfor -mance and component sizes in the EV kits.

The MAXM17623 module delivers up to 1A at a switching frequency of 2MHz. The module is configured for a 1.5V output over a 2.9V to 5.5V input range.

The MAXM17624 module delivers up to 1A at a switching frequency of 4MHz. The module is configured for a 3.3V output over a 3.6V to 5.5V input range.

The EV kits feature provisions for selecting Mode of operation (pulse-width modulation and pulse-frequency modulation) and Enable input. The MAXM17623/MAXM17624 module data sheet provides a complete description of the parts that should be read in conjunction with this EV kit data sheet prior to operating the EV kits.

Ordering Information appears at end of data sheet.

## MAXM17623/MAXM17624 EV Kit Top View

<!-- image -->

319-100905; Rev 0; 4/22

## MAXM17623/MAXM17624 Evaluation Kit

## Features

- Operates up to 5.5V Input Supply
- MAXM17623 Offers High 90.3% Efficiency (V IN  = 5V, VOUT = 1.5V, I OUT = 400mA)
- MAXM17624 Offers High 95.2% Efficiency (V IN  = 5V, VOUT = 3.3V, I OUT = 400mA)
- Up to 1A Load Current
- 2MHz Fixed Switching Frequency for the MAXM17623
- 4MHz Fixed Switching Frequency for the MAXM17624
- Selectable Pulse-Width Modulation (PWM) and Pulse-Frequency Modulation (PFM) Modes of Operation
- Internal 1ms Soft-Start Time
- Power-Good (PGOOD) Output with Pullup Resistor to Respective Input Voltages
- Low-Profile, Surface-Mount Components
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR32 (EN55032) Class B Conducted and Radiated Emissions

## MAXM17623/MAXM17624 Evaluation Kit

## Quick Start

## Configuration Diagram

<!-- image -->

## Required Equipment

- One 2.9V to 5.5V DC, 1A power supply
- Load resistors capable of sinking up to 1A at 1.5V and 3.3V (1.5Ω for the MAXM17623 and 3.3Ω for the MAXM17624)
- Digital multimeter (DMM)

## Equipment Setup and Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify and test individual modules operation:

Caution: Do not turn on power supply until all connections are completed.

- 1) Disable the power supply and set the input power supply at a valid input voltage.
- 2) Connect the positive terminal and negative terminal of the power supply to the VIN pad and its adjacent PGND pad of the module under evaluation.
- 3) Connect a 1A (max) resistive load across the VOUT pad and its nearest PGND pad of the corresponding module.
- 4) Verify that shunts are installed in default position on jumpers, JU101 for the MAXM17623 and JU201 for the MAXM17624 (see Table 1 for details).
- 5) Select the shunt position on jumpers, JU102 for the MAXM17623 and JU202 for the MAXM17624 according to the required mode of operation (see Table 2 for details).
- 6) Connect the DMM in voltage measurement mode across the V OUT and its respective PGND pad.
- 7) Turn on the input power supply.
- 8) Verify that the DMM displays expected terminal voltage with respect to PGND.

## Evaluates: MAXM17623/MAXM17624 Modules in Application

## Detailed Description

The MAXM17623/MAXM17624 EV kits are designed to demonstrate  the  salient  features  of  the  MAXM17623/ MAXM17624 power modules. The EV kits consist of typical application circuits of two different modules. Each of these circuits are electrically isolated from each other and hosted on the same printed circuit board (PCB). Each of these circuits can be evaluated for its performance under different operating conditions by powering them from their respective input pins.

## MODE Selection

The MAXM17623/MAXM17624 supports PWM and PFM modes  of  operation.  In  the  EV  kits,  leave  the  jump -ers  JU102  for  the  MAXM17623  and  JU202  for  the MAXM17624  open  for  operating  the  modules  in  PFM mode at light  load.  Install  shunts  to  configure  the  mod -ules  in  PWM  mode.  See Table  2  for  jumper  settings. Refer  to  MODE  Selection  section  of  the  MAXM17623/ MAXM17624 data sheet for more details.

## Adjusting Output Voltage

- The MAXM17623 supports a 0.8V to 1.5V adjustable output voltage, and the MAXM17623 EV kit output voltage is preset to 1.5V.
- The MAXM17624 supports a 1.5V to 3.3V adjustable output voltage, and the MAXM17624 EV kit output voltage is preset to 3.3V.
- For the MAXM17623, the output voltage is pro -grammed using the resistor-divider R102 and R103, and for the MAXM17624, the output voltage is pro -grammed using the resistor-divider R202 and R203. Refer to the Adjusting Output Voltage section in the MAXM17623/MAXM17624 data sheet for more details.

## Output Capacitor Selection

The  X7R  ceramic  capacitors  are  preferred  due  to  their stability  over  temperature  in  industrial  applications.  For the MAXM17623, the required output capacitor (C108) is 22μF/6.3V, and for the MAXM17624, the required output capacitor (C208) is 10μF/16V. Refer to Output Capacitor Selection  section  in  the  MAXM17623/MAXM17624 data sheet for more details.

## MAXM17623/MAXM17624 Evaluation Kit

## Input Capacitor Selection

The input capacitors C105 for the MAXM17623 and C205 for  the  MAXM17624  serve  to  reduce  the  current  peaks drawn from the input power supply and reduce switching frequency ripple at the input. Refer to the Input Capacitor Selection section in  the  MAXM17623/MAXM17624 data  sheet  to  choose  input  capacitance.  A  2.2μF/10V input capacitor is chosen for both the MAXM17623 and MAXM17624.

## Electromagnetic Interference

Compliance  to  conducted  emissions  (CE)  standards requires an electromagnetic interference (EMI) filter at the input of a switching power module. The EMI filter attenu -ates high-frequency currents drawn by the switching power module  and  limits  the  noise  injected  back  into  the  input power source. Use of EMI filter components as shown in the EV kit schematic results in lower conducted emissions below CISPR32 Class B limits. Manufacturer part numbers of  the  EMI  filter  components  are  listed  as  optional  BOM. The  EV  kits'  PCB  layout  are  also  designed  to  limit  radi -

## Evaluates: MAXM17623/MAXM17624 Modules in Application

ated emissions from switching nodes of the power module, resulting  in  radiated  emissions  below  CISPR32  Class  B limits. Further, capacitors placed near the input of the board help in attenuating high-frequency noise.

## Hot Plug-In and Long Input Cables

The  MAXM17623/MAXM17624  EV  kit  PCB  provides optional tantalum capacitors (C104 for the MAXM17623 and  C204  for  the  MAXM17624,  47µF/8V)  to  dampen input voltage peaks and oscillations that can arise during the  hot  plug-in  and/or  due  to  long  input  cables.  These capacitors limit the peak voltage at the input of the device when the EV kits are powered directly from a precharged capacitive source or an industrial backplane PCB. Long input  cables  between  the  input  power  source  and  the EV  kits  circuit  can  cause  input-voltage  oscillations  due to  the  inductance  of  the  cables.  The  equivalent  series resistance  (ESR)  of  the  tantalum  capacitor  helps  damp out the oscillations caused by long input cables. Further, capacitors (C101 for the MAXM17623 and C201 for the MAXM17624,  0.1µF/16V)  placed  near  the  input  of  the board helps in attenuating high-frequency noise.

## Table 1. EN Jumper Description (JU101, JU201)

| SHUNT POSITION   | EN/UVLO PIN      | OUTPUT   |
|------------------|------------------|----------|
| 1-2*             | Connected to VIN | Enabled  |
| 2-3              | Connected to GND | Disabled |

## Table 2. MODE Jumper Description (JU102, JU202)

| SHUNT POSITION   | MODE/SYNC PIN    | MODE                                          |
|------------------|------------------|-----------------------------------------------|
| 1-2              | Connected to GND | Operates in PWM Mode in all load conditions   |
| Not installed*   | Unconnected      | Operates in PFM Mode in light load conditions |

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Murata Americas | www.murata.com    |
| TDK Corp.       | www.tdk.com       |
| Kemet           | www.kemet.com     |
| Vishay          | www.vishay.com    |
| Panasonic Corp. | www.panasonic.com |

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAXM17623EVKITE# | EVKit  |
| MAXM17624EVKITE# | EVkit  |

# Denotes RoHS compliance.

## MAXM17623/MAXM17624 EV Kits Performance Report

(V IN = V EN = 5V, VSGND = V PGND = 0V, LX = Open, T A = -40°C to +125°C, unless otherwise noted. Typical values are at T A = +25°C. All voltages are referenced to SGND, unless otherwise noted.)

<!-- image -->

MAXM17624 OUTPUT VOLTAGE vs. LOAD CURRENT V IN = 5V, V OUT = 3.3V, PWM &amp; PFM MODE

<!-- image -->

<!-- image -->

MAXM17623 OUTPUT VOLTAGE vs. LOAD CURRENT V OUT = 1.5V, PWM &amp; PFM MODE

<!-- image -->

MAXM17623 BODE PLOT V IN = 3.3V, V OUT  = 1.5V, FULL LOAD, PWM MODE

<!-- image -->

<!-- image -->

MAXM17624 EFFICIENCY vs. LOAD CURRENT V IN = 5V, V OUT = 3.3V, PWM &amp; PFM MODE

<!-- image -->

MAXM17624 BODE PLOT V IN = 5V, V OUT  = 3.3V, FULL LOAD, PWM MODE

<!-- image -->

MAXM17624 LOAD TRANSIENT RESPONSE V IN = 5V, V OUT = 3.3V, MODE = PWM (LOAD CURRENT STEPPED FROM 0.5 TO 1A)

<!-- image -->

## MAXM17623/MAXM17624 EV Kits Performance Report (continued)

(V IN = V EN = 5V, VSGND = V PGND = 0V, LX = Open, T A = -40°C to +125°C, unless otherwise noted. Typical values are at T A = +25°C. All voltages are referenced to SGND, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

MAXM17623 STARTUP INTO PRE-BIAS V IN =3.3V, V PREBIAS = 0.8V, V OUT = 1.5V, I OUT = 1A, PWM MODE

<!-- image -->

<!-- image -->

<!-- image -->

MAXM17624 STARTUP INTO PRE-BIAS V IN =5V, V PREBIAS = 2.5V, V OUT = 3.3V, I LOAD = 1A, PWM MODE

<!-- image -->

## MAXM17623/MAXM17624 EV Kits Performance Report (continued)

(V IN = V EN = 5V, VSGND = V PGND = 0V, LX = Open, T A = -40°C to +125°C, unless otherwise noted. Typical values are at T A = +25°C. All voltages are referenced to SGND, unless otherwise noted.)

<!-- image -->

<!-- image -->

MAXM17623 OUTPUT CURRENT v/s AMBIENT TEMPERATURE V IN = 3.3V, V OUT = 1.5V

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAXM17623/MAXM17624 EV Kits Performance Report (continued)

(V IN = V EN = 5V, VSGND = V PGND = 0V, LX = Open, T A = -40°C to +125°C, unless otherwise noted. Typical values are at T A = +25°C. All voltages are referenced to SGND, unless otherwise noted.)

MAXM17623 CONDUCTED EMISSIONS PLOT MEASURED ON MAXM17623EVKITE# WITH L101=2.2µH, C102=0.47µF, C103=2.2µF

<!-- image -->

MAXM17623 RADIATED EMISSIONS PLOT MEASURED ON MAXM17623EVKITE#

Peak (Vertical)

Peak (Horizontal)

MAXM17624 CONDUCTED EMISSIONS PLOT MEASURED ON MAXM17624EVKITE# WITH L201=0.68µH, C202=0.47µF, C203=2.2µF

<!-- image -->

MAXM17624 RADIATED EMISSIONS PLOT MEASURED ON MAXM17624EVKITE#

<!-- image -->

Peak (Vertical)

Peak (Horizontal)

<!-- image -->

## MAXM17623 EV Kit Bill of Materials

|   ITEM |   QTY | DESIGNATOR       | DESCRIPTION                                              | MANUFACTURER PART NUMBER   |
|--------|-------|------------------|----------------------------------------------------------|----------------------------|
|      1 |     3 | C101, C106, C109 | 0.1μF±10%, 10V, X7R, Ceramic Capacitor (0402)            | TDK C1005X7R1C104K050BC    |
|      2 |     1 | C104             | 47μF±20%, 8V, Tantalum Capacitor (3528)                  | Kemet T520B476M008ATE035   |
|      3 |     1 | C105             | 2.2μF±10%, 10V, X7R, Ceramic Capacitor (0603)            | Murata GRM188R71A225KE15   |
|      4 |     1 | C107             | 220pF±10%, 50V, X7R, Ceramic Capacitor (0402)            | Murata GRM155R71H221KA01   |
|      5 |     1 | C108             | 22μF±10%, 6.3V, X7R, Ceramic Capacitor (0805)            | Murata GRM21BZ70J226ME44   |
|      6 |     1 | R101             | 100kΩ±1%, Resistor (0402)                                | Panasonic ERJ-2RKF1003     |
|      7 |     1 | R102             | 33.2kΩ±1%, Resistor (0402)                               | Vishay CRCW04023322FK      |
|      8 |     1 | R103             | 37.4kΩ±1%, Resistor (0402)                               | Vishay CRCW040237K4FK      |
|      9 |     1 | U101             | MAXM17623 10pin u-SLIC Power Module                      | Maxim MAXM17623AMB+        |
|     10 |     1 | C102             | OPTIONAL: 0.47μF±10%, 10V, X7R, Ceramic Capacitor (0603) | Murata GRM188R71A474KA61   |
|     11 |     1 | C103             | OPTIONAL: 2.2μF±10%, 10V, X7R, Ceramic Capacitor (0603)  | Murata GRM188R71A225KE15   |
|     12 |     1 | L101             | OPTIONAL: 2.2µH±20%, 1.7A Shielded Wirewound Inductor    | Murata DFE201610E-2R2M     |

## MAXM17624 EV Kit Bill of Materials

|   ITEM |   QTY | DESIGNATOR       | DESCRIPTION                                              | MANUFACTURER PART NUMBER   |
|--------|-------|------------------|----------------------------------------------------------|----------------------------|
|      1 |     3 | C201, C206, C209 | 0.1μF±10%, 10V, X7R, Ceramic Capacitor (0402)            | TDK C1005X7R1C104K050BC    |
|      2 |     1 | C204             | 47μF±20%, 8V, Tantalum Capacitor (3528)                  | Kemet T520B476M008ATE035   |
|      3 |     1 | C205             | 2.2μF±10%, 10V, X7R, Ceramic Capacitor (0603)            | Murata GRM188R71A225KE15   |
|      4 |     1 | C207             | 220pF±10%, 50V, X7R, Ceramic Capacitor (0402)            | Murata GRM155R71H221KA01   |
|      5 |     1 | C208             | 10μF±10%, 16V, X7R, Ceramic Capacitor (0805)             | Murata GRM21BZ71C106KE15   |
|      6 |     1 | R201             | 100kΩ±1%, Resistor (0402)                                | Panasonic ERJ-2RKF1003     |
|      7 |     1 | R202             | 118kΩ±1%, Resistor (0402)                                | Panasonic ERJ-2RKF1183     |
|      8 |     1 | R203             | 37.4kΩ±1%, Resistor (0402)                               | Vishay CRCW040237K4FK      |
|      9 |     1 | U201             | MAXM17624 10pin u-SLIC Power Module                      | Maxim MAXM17624AMB+        |
|     10 |     1 | C202             | OPTIONAL: 0.47μF±10%, 10V, X7R, Ceramic Capacitor (0603) | Murata GRM188R71A474KA61   |
|     11 |     1 | C203             | OPTIONAL: 2.2μF±10%, 10V, X7R, Ceramic Capacitor (0603)  | Murata GRM188R71A225KE15   |
|     12 |     1 | L201             | OPTIONAL: 0.68µH±20%, 2.7A Shielded Wirewound Inductor   | Murata DFE201610E-R68M     |

## MAXM17623/MAXM17624 Evaluation Kit

## MAXM17623 EV Kit Schematic

<!-- image -->

## MAXM17624 EV Kit Schematic

<!-- image -->

## MAXM17623/MAXM17624 EV Kits PCB Layout Diagrams

<!-- image -->

MAXM17623/MAXM17624 EV Kits PCB Layout-Top Silkscreen

<!-- image -->

MAXM17623/MAXM17624 EV Kits PCB Layout-Layer 2

MAXM17623/MAXM17624 EV Kits PCB Layout-Top Layer

<!-- image -->

MAXM17623/MAXM17624 EV Kits PCB Layout-Layer 3

<!-- image -->

## MAXM17623/MAXM17624 EV Kits PCB Layout Diagrams (continued)

MAXM17623/MAXM17624 EV Kits PCB Layout-Bottom Layer

<!-- image -->

MAXM17623/MAXM17624 EV Kits PCB Layout-Bottom Silkscreen

<!-- image -->

## MAXM17623/MAXM17624 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/22            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

Evaluates: MAXM17623/MAXM17624

Modules in Application