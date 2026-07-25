<!-- lastmod 2022-08-05 -->
## MAX77787 Evaluation Kit

## General Description

The MAX77787 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the MAX77787, standalone 3.15A USB Type-C ® autonomous charger with JEITA.

The MAX77787 can operate from 4.5V to 13.7V input, with a fast charge current up to 3.15A and a maximum input current limit of 3A. The MAX77787 is offered to support Liion batteries with JEITA compliance. It also has another option  that  supports  LiFePO4  batteries  with  non-JEITA compliance.

The  EV  kit  features  USB  Type-C  CC  detection,  battery charging compliant with the USB  Battery Charging Specification  Revision  1.2  (BC1.2),  proprietary  adapter detection upon input insertion, and automatic configuration of the charger input current limit to the maximum allowable current from the input source.

The MAX77787 has the reverse-boost capability, which is enabled by the ENBST pin to allow the 5.1V/1.5A output to CHGIN.  The  EV  kit  includes  the  variable  resistor  and thermistor to demonstrate the JEITA compliance.

## EV Kit Photo

Figure 1. MAX77787 EV Kit

<!-- image -->

Evaluates: MAX77787

## Benefits and Features

- Up to 16V Protection
- 13.7V Maximum Input Operating Voltage
- 3.15A Maximum Charging Current
- 6A Discharge Current Protection
- No Firmware or Communication Required
- Integrated USB Detection
- Integrated CC Detection for USB Type-C
- Integrated BC1.2 Detection for Legacy SDP, DCP, and CDP
- Automatic Input Current Limit Configuration
- Input Voltage Regulation with Adaptive Input Current Limit (AICL)
- 5.1V, 1.5A OTG Mode and BYP Reverse Boost
- Termination Voltage
- 4.1V to 4.55V for Li-ion and Li-poly Batteries
- 3.6V/3.7V for LiFePO4 Battery
- Safety
- Charge Safety Timer
- JEITA Compliance with NTC Thermistor (MAX77787J)
- HOT/COLD Stop Charging with NTC Thermistor (MAX77787H)
-  Thermal Shutdown
- Pin Control of all Functions
- Resistor-Configurable Fast-Charge Current, Termination Voltage, and Input Current Limit
- ENBST Pin to Enable and Disable Reverse Boost
- STAT Pin to Indicate Charging Status
- INOKB Pin to Indicate Input Power-OK (POK)
- CHGENB Pin to Enable and Disable Charging
- STBY Pin to Support Suspend Mode
- THM Pin to Monitor Thermistor
- Fixed  Resistor  Options  to  Easily  set  Fast-Charge Current, Termination Voltage, and Input Current Limit
- Integrated Power Path
- Integrated Battery True-Disconnect FET
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

## Evaluates: MAX77787

Figure 2. Jumper and Resistor Options Location

<!-- image -->

## Quick Start

## EV Kit Default Setting

| INPUT CURRENT LIMIT   | FAST-CHARGE CURRENT   | TERMINATION VOLTAGE   | CHARGER   | REVERSE BOOST MODE   | SUSPEND MODE   |
|-----------------------|-----------------------|-----------------------|-----------|----------------------|----------------|
| 3A                    | 500mA                 | 3.6V                  | ON        | OFF                  | OFF            |

Note:

To change the setting, see Table 1 for jumper positions.

## Required Equipment

- MAX77787 evaluation kit
- USB Type-C travel adapter and cable
- Power supply
- Battery, battery simulator, or power supply with electronic load
- Oscilloscope
- Multimeters

## Evaluates: MAX77787

## Initial Test Setup

The EV kit is fully assembled and tested. Follow the steps to verify board operation:

1.  Do not turn on the DC power supply until all connections are made.
2.  Confirm that all jumpers are at their default positions as indicated in Table 1 .
3.  Connect the battery, battery simulator, or power supply to the loop labeled BATT and GND.
4.  Connect the power supply to the loop labeled CHGIN. Note that CHGIN can come from three sources (Micro-USB connector, USB TYPE-C Connector, or CHGIN loop), only one of these sources should be connected at any time.
5.  The EV kit is now ready for use.

## Detailed Description of Hardware

Follow the initial test setup procedure.

## Battery Charger Test Setup

The battery charger can be tested in three different ways; with a battery, battery simulator, or power supply with an electronic load. Typical bench setups for MAX77787 the EV kit with different configurations are shown in Figure 3 , Figure 4 and Figure 5 .

## Battery

- 1) Connect the 1 cell battery pack and current meter between BATT and GND. Note: Only use a battery with a charge termination voltage that matches that of the jumper setting on the board.
- 2) Connect the 5.0V/5.0A current-limited DC power supply between CHGIN and GND and turn it on.
- 3) Observe the current reading from the current meter. If the battery is discharged, the fast-charging current should match the setting with the external IFAST resistor (R7/R8/R9). If the battery is not discharged, it could be in a top-off state or done state. The current reading could be top-off current (match the jumper setting on the board) or done state (~0A).

Figure 3. Battery Charger Test with Real Battery Pack

<!-- image -->

## Evaluates: MAX77787

## Battery Simulator

- 1) Connect the battery simulator between BATT and GND, adjust the voltage to 3.8V with 3.5A current limit, and turn it on.
- 2) Connect the 5.0V/5.0A current-limited DC power supply between CHGIN and GND and turn it on.
- 3) Observe the current reading from the battery simulator and see if the fast-charging current matches with the external IFAST resistor.

Figure 4. Battery Charger Test with Battery Simulator

<!-- image -->

## Power Supply with Electronic Load

- 1) Connect the power supply between BATT and GND and adjust the voltage to 3.8V with 3.5A current limit.
- 2) Connect the electronic load between BATT and GND and set the load current to 3.5A.
- 3) Turn on the power supply and electronic load.
- 4) Connect the 5.0V/5.0A current-limited DC power supply between CHGIN and GND and turn it on.
- 5) Observe the current reading from the current meter 1 and 2 (the fast-charging current equals I 2 -I 1 ) and see if this value matches with the external IFAST resistor.

Figure 5. Battery Charger Test with Power Supply and Electronic Load

<!-- image -->

Table 1. Default Shunt Positions and Jumper Descriptions

| JUMPER #   | DEFAULT POSITION   | FUNCTION                                                                                          |
|------------|--------------------|---------------------------------------------------------------------------------------------------|
| J3         | Short 5-6          | Short 1-2: Connect THM pin to a variable resistor                                                 |
| J3         | Short 5-6          | Short 3-4: Connect THM pin to a thermistor                                                        |
| J3         | Short 5-6          | Short 5-6: Connect THM pin to a fixed value resistor 10K                                          |
| J3         | Short 5-6          | Short 7-8: Connect THM pin to GND                                                                 |
| J4         | Short 2-3          | Short 1-2: Enable OTG Reverse Boost                                                               |
| J4         | Short 2-3          | Short 2-3: Connect ENBST pin to GND                                                               |
| J5         | Short 2-3          | Short 1-2: Enable USB Suspend Mode                                                                |
| J5         | Short 2-3          | Short 2-3: Connect STBY pin to GND                                                                |
| J6         | Short 2-3          | Short 1-2: Disable Charging                                                                       |
| J6         | Short 2-3          | Short 2-3: Connect CHGENB to GND                                                                  |
| J7         | Short 3-4          | Short 1-2: Connect IFAST pin to a fixed value resistor 24.9K (IFAST = 3.15A)                      |
| J7         | Short 3-4          | Short 3-4: Connect IFAST pin to a fixed value resistor 2.43K (IFAST = 0.5A)                       |
| J7         | Short 3-4          | Short 5-6: Connect IFAST pin to a fixed value resistor (open for user's choice of resistor value) |
| J7         | Short 3-4          | 7-8: Not in use                                                                                   |
| J8         | Short 1-2          | Short 1-2: Connect VSET pin to a fixed value resistor 24.9K (VSET = 3.6V)                         |
| J8         | Short 1-2          | Short 3-4: Connect VSET pin to a fixed value resistor 2.43K (VSET = 4.55V)                        |
| J8         | Short 1-2          | Short 5-6: Connect VSET pin to a fixed value resistor (open for user's choice of resistor value)  |
| J8         | Short 1-2          | 7-8: Not in use                                                                                   |
| J9         | Short 3-4          | Short 1-2: Connect INLIM pin to a fixed value resistor 24.9K (INLIM = 0.5A)                       |
| J9         | Short 3-4          | Short 3-4: Connect INLIM pin to a fixed value resistor 2.43K (INLIM = 3A)                         |
| J9         | Short 3-4          | Short 5-6: Connect INLIM pin to a fixed value resistor (open for user's choice of resistor value) |
| J9         | Short 3-4          | 7-8: Not in use                                                                                   |

## Table 2. Mode Configuration by External Pins

| CHGENB   | ENBST    | STBY     | CHGIN FET   | QBAT   | MODE                      |
|----------|----------|----------|-------------|--------|---------------------------|
| J6 (1-2) | J4 (2-3) | J5 (2-3) | ON          | OFF    | Buck = ON, Charging = OFF |
| J6 (1-2) | J4 (2-3) | J5 (1-2) | OFF         | OFF    | Invalid                   |
| J6 (1-2) | J4 (1-2) | J5 (2-3) | ON          | OFF    | Invalid                   |
| J6 (1-2) | J4 (1-2) | J5 (1-2) | OFF         | OFF    | Invalid                   |
| J6 (2-3) | J4 (2-3) | J5 (2-3) | ON          | ON     | Buck = ON, Charging = ON  |
| J6 (2-3) | J4 (2-3) | J5 (1-2) | OFF         | ON     | Suspend Mode              |
| J6 (2-3) | J4 (1-2) | J5 (2-3) | ON          | ON     | OTG Reverse-Boost Mode    |
| J6 (2-3) | J4 (1-2) | J5 (1-2) | OFF         | ON     | BYP Reverse-Boost Mode    |

## Evaluates: MAX77787

## BC1.2 and CC Detection Test Setup

- 1) Connect the battery/battery simulator/power supply with an electronic load between BATT and GND. See the Battery Charger Test Setup section for details.
- 2) Plug in the USB Type-C cable from the PC or AC adaptor.
- 3) MAX77787 automatically sets the CHGIN input current limit based on the charger type detection results. If the input source is not a standard power source described by BC1.2, USB Type-C or proprietary charger type that the MAX77787 can detect, the MAX77787 sets the input current limit according to RINLIM. In the case of floating RINLIM, the MAX77787 input current limit is set to 0.5A when an unknown proprietary charger is detected.

## OTG Reverse Boost Test Setup

- 1) Connect the power supply between BATT and GND, adjust the voltage to 3.8V with 3.5A current limit, and turn it on.
- 2) Apply the Jumper 4 to enable the OTG reverse-boost mode.
- 3) Monitor the voltage of CHGIN at CHGINS test point and see whether it equals 5.1V. Note that VCHGIN must be lower than 0.7V before ENBST is enabled. Otherwise, CHGIN does not supply current when ENBST is enabled.

## BYP Reverse Boost Test Setup

- 1) Connect the power supply between BATT and GND, adjust the voltage to 3.8V with 3.5A current limit, and turn it on.
- 2) Apply the Jumper 4 and Jumper 5 to enable the BYP reverse-boost mode.
- 3) Monitor the voltage of BYP at BYPS test point and see whether it equals 5.1V.

## LED Indicator

- 1) Two LED indicators are installed on the EV kit: DS1 (green) is for the STAT pin and DS2 (red) is for INOKB.
- 2) The STAT pin is an open-drain and active-low output that indicates charge status. See Table 3 for details.
- 3) INOKB is an open-drain and active-low output that indicates the input status. If a valid input source is inserted and the buck converter starts switching, INOKB pulls low. When the reverse boost is enabled, INOKB pulls low to indicate the 5V output from CHGIN.

## Table 3. STAT Output with Charging Status

| CHARGING STATUS                  | STAT                                                   | LOGIC STATE                                             | CHARGE STATUS LED                 |
|----------------------------------|--------------------------------------------------------|---------------------------------------------------------|-----------------------------------|
| No Input                         | High Impedance                                         | High                                                    | Off                               |
| Trickle, Pre-charge, Fast Charge | Repeat Low and High Impedance with 1Hz, 50% duty cycle | After an external diode and a capacitor rectifier, High | Blinking with 1Hz, 50% duty cycle |
| Top-Off and Done                 | Low                                                    | Low                                                     | Solid On                          |
| Faults                           | High Impedance                                         | High                                                    | Off                               |

## MAX77787 Evaluation Kit

## Evaluates: MAX77787

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE                     |
|-------------|--------------|-----------------------------|
| MURATA      | 770-436-1300 | www.murata-northamerica.com |
| SAMTEC      | 800-726-8329 | www.samtec.com              |
| TAIYO-YUDEN | 603-669-7587 | www.t-yuden.com             |
| TDK         | 847-803-6100 | www.tdk.com                 |
| VISHAY      | 408-970-5852 | www.vishay.com              |
| CYNTEC      | 510-668-5167 | www.cyntec.com              |
| PANASONIC   | 800-344-2112 | www.panasonic.com           |

Note:

Indicate that you are using MAX77787 when contacting these component suppliers.

## Ordering Information

| PART NUMBER     | IC            | TYPE   | THERMAL PROTECTION   | BATTERY CHEMISTRY   |
|-----------------|---------------|--------|----------------------|---------------------|
| MAX77787JEVKIT# | MAX77787JEWX+ | EV Kit | JEITA                | Li-ion Li-polymer   |
| MAX77787HEVKIT# | MAX77787HEWX+ | EV Kit | HOT/COLD STOP        | LiFePO4             |

## MAX77787 EV Kit Bill of Materials

| QTY                                                                  | REF DES                                                              | MFG PART#                                                            | MANUFACTURER                                                         | VALUE                                                                |
|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|
| MINIMAL BILL OF MATERIALS FOR MAX77787 AUTONOMOUS CHARGER WITH JEITA | MINIMAL BILL OF MATERIALS FOR MAX77787 AUTONOMOUS CHARGER WITH JEITA | MINIMAL BILL OF MATERIALS FOR MAX77787 AUTONOMOUS CHARGER WITH JEITA | MINIMAL BILL OF MATERIALS FOR MAX77787 AUTONOMOUS CHARGER WITH JEITA | MINIMAL BILL OF MATERIALS FOR MAX77787 AUTONOMOUS CHARGER WITH JEITA |
| 2                                                                    | C1, C8                                                               | C1005X5R1A225K050BC                                                  | TDK                                                                  | 2.2µF; 10%; 10V; X5R; SMT (0402); CERAMIC                            |
| 1                                                                    | C2                                                                   | EMK105ABJ225MV; GRM155R61C225ME11                                    | TAIYO YUDEN; KEMET                                                   | 2.2µF; 20%; 16V; X5R; SMT (0402); CERAMIC                            |
| 1                                                                    | C3                                                                   | C1608JB1C106M080AB                                                   | TDK                                                                  | 10µF; 20%; 16V; JB; SMT (0603); CERAMIC                              |
| 1                                                                    | C4                                                                   | GRM155R61C104KA88                                                    | MURATA                                                               | 0.1µF; 10%; 16V; X5R; SMT (0402); CERAMIC                            |
| 3                                                                    | C5, C7, C9                                                           | C1608X5R1A106K080AC                                                  | TDK                                                                  | 10µF; 10%; 10V; X5R; SMT (0603); CERAMIC                             |
| 1                                                                    | C6                                                                   | ANY                                                                  | ANY                                                                  | 22µF; 16V; 10%; X5R; SMT (0805); CERAMIC                             |
| 1                                                                    | L1                                                                   | HTEH25201T-R47MSR-63                                                 | CYNTEC                                                               | 0.47µH; ±20%; 5.6A                                                   |
| 1                                                                    | RT1                                                                  | NCP15XH103F03                                                        | MURATA                                                               | 10KΩ; ±1%; SMT (0402); THERMISTOR; THICK FILM                        |
| 1                                                                    | R3                                                                   | CRCW040210K0FK; RC0402FR- 0710KL                                     | VISHAY DALE; YAGEO PHICOMP                                           | 10KΩ; 1%; SMT (0402); ±100PPM/°C; 0.063W                             |
| 3                                                                    | R7, R10, R14                                                         | ERJ-2RKF2492                                                         | PANASONIC                                                            | 24.9KΩ; 1%; SMT (0402); ±100PPM/°C; 0.063W                           |
| 1                                                                    | U1                                                                   | MAX77787                                                             | MAXIM                                                                | MAX77787JEWX+                                                        |
| OTHER COMPONENTS FOR EVALUATION KIT                                  | OTHER COMPONENTS FOR EVALUATION KIT                                  | OTHER COMPONENTS FOR EVALUATION KIT                                  | OTHER COMPONENTS FOR EVALUATION KIT                                  | OTHER COMPONENTS FOR EVALUATION KIT                                  |

## MAX77787 Evaluation Kit

## Evaluates: MAX77787

## MAX77787 Evaluation Kit

|   QTY | REF DES                                                         | MFG PART#                         | MANUFACTURER                            | VALUE                                                          |
|-------|-----------------------------------------------------------------|-----------------------------------|-----------------------------------------|----------------------------------------------------------------|
|     0 | C10                                                             | N/A                               | N/A                                     | NOT INSTALLED                                                  |
|     1 | R1                                                              | CRCW040210K0FK; RC0402FR- 0710KL  | VISHAY DALE; YAGEO PHICOMP              | 10KΩ; 1%; SMT (0402); ±100PPM/°C; 0.063W                       |
|     1 | R2                                                              | 3296Y-1-503LF                     | BOURNS                                  | 50KΩ; 10%; THROUGH- HOLE-RADIAL LEAD; 0.5W                     |
|     3 | R4, R13, R17                                                    | N/A                               | N/A                                     | NOT INSTALLED                                                  |
|     2 | R5, R6                                                          | CR0402-16W-1651FT; CRCW04021K65FK | VENKEL LTD.; VISHAY DALE                | 1.65KΩ; 1%; SMT (0402); ±100PPM/°C; 0.063W                     |
|     3 | R8, R11, R15                                                    | ERJ-2RKF2431                      | PANASONIC                               | 2.43KΩ; 1%; SMT (0402); ±100PPM/°C; 0.1W                       |
|     0 | R9, R12, R16                                                    | N/A                               | N/A                                     | NOT INSTALLED                                                  |
|     1 | J1                                                              | 12401832E402A                     | AMPHENOL                                | FEMALE; USB TYPE C CONNECTOR                                   |
|     1 | J2                                                              | 10118193-0001LF                   | FCI CONNECT                             | FEMALE; MICRO USB B TYPE RECEPTACLE                            |
|     4 | J3, J7-J9                                                       | PEC04DAAN                         | SULLINSELECTRONICS CORP.                | CONNECTOR; MALE; THROUGH-HOLE; STRAIGHT; 8 PINS                |
|     3 | J4-J6                                                           | TSW-103-07-T-S                    | SAMTEC                                  | CONNECTOR; THROUGH- HOLE; SINGLE ROW; STRAIGHT; 3 PINS         |
|    10 | BATT, BYP, CHGIN, GND1-GND6, SYS                                | 9020 BUSS                         | WEICO WIRE                              | MAXIM PAD; WIRE; SOLID; 20AWG                                  |
|    12 | BATTS, BYPS, CC1, CC2, CHGINS, DN, DP, GNDS, LX, PVL, SYSS, THM | 5000                              | KEYSTONE                                | TEST POINT; RED                                                |
|     5 | CHGENB, ENBST, INOKB, STAT, STBY                                | 5002                              | KEYSTONE                                | TEST POINT; WHITE                                              |
|     1 | DS1                                                             | SML-311YTT86                      | ROHM                                    | LED; SMT (0603); YELLOW; VF = 1.8V; IF = 0.02A; -30°C TO +85°C |
|     1 | DS2                                                             | SML-311UT                         | ROHM                                    | LED; SMT (0603); RED; VF = 1.8V; IF = 0.02A; -30°C TO +85°C    |
|     4 | MH1-MH4                                                         | 9032                              | KEYSTONE                                | ROUND-THRU HOLE SPACER; NYLON                                  |
|     1 | MISC1                                                           | AK67421-1-R                       | ASSMANN                                 | USB2.0 MICRO CONNECTION CABLE                                  |
|     6 | SU4-SU9                                                         | S1100-B; SX1100-B; STC02SYAN      | KYCON; KYCON; SULLINS ELECTRONICS CORP. | JUMPER; BLACK; TOTAL LENGTH = 0.24IN                           |
|     1 | PCB                                                             | MAX77787                          | MAXIM                                   | MAX77787JEVKIT#                                                |

## Evaluates: MAX77787

## MAX77787 EV Kit Schematic

<!-- image -->

## MAX77787 Evaluation Kit

## Evaluates: MAX77787

## MAX77787 EV Kit PCB Layout

MAX77787 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX77787 EV Kit PCB Layout-Top

<!-- image -->

## MAX77787 Evaluation Kit

MAX77787 EV Kit PCB Layout-Layer 2

<!-- image -->

MAX77787 EV Kit PCB Layout-Layer 3

<!-- image -->

## Evaluates: MAX77787

## MAX77787 EV Kit PCB Layout (continued)

MAX77787 EV Kit PCB Layout-Bottom

<!-- image -->

## Evaluates: MAX77787

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/21           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX77787 Evaluation Kit