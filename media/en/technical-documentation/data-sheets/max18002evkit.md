<!-- lastmod 2023-03-14 -->
<!-- image -->

## General Description

The MAX18002 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the MAX18002 series of boost converters. The MAX18002 series has an input range of 0.5V to 5.5V, with a switch current limit of 3.6A and output voltage adjustable between 2.5V  and  5.5V  (ultrasonic  mode  (USM)  and  nanopower mode disabled for V OUT  &gt; 5V).

The EV kit can be ordered  with  MAX18000AWT+ (nanopower version) and MAX18002AWT+ (USM version).  It  is  equipped  with  test  points  and  jumpers  for testing most of the functionality of the device. There are probing holes on critical nodes (OUT and LX) for precise measurements.

## EV Kit Specification

## Table 1. EV Kit Specification

| SPECIFICATION            | TEST CONDITION                 |   MIN | TYP   | MAX   | UNIT   |
|--------------------------|--------------------------------|-------|-------|-------|--------|
| Startup Voltage          |                                |   1.8 |       | 5.5   | V      |
| Output Voltage           | Configured using RSEL resistor |   2.5 |       | 5.5   | V      |
| Maximum Inductor Current |                                |   3.6 |       |       | A      |

## Table 2. Default Jumper Positions

| JUMPER   | NODE OR FUNCTION   | SHUNT POSITION   | FEATURE                                        |
|----------|--------------------|------------------|------------------------------------------------|
| JU1      | EN                 | 2-3              | Connects EN to GND                             |
| JU2      | SEL                | 1-2*             | Connects RSEL pin to an on-board potentiometer |

Ordering Information appears at end of data sheet.

Evaluates: MAX18000 and

MAX18002 in WLP Package

## Quick Start

## Required Equipment

- MAX18002  Evaluation  Kit  (with  MAX18000AWT+  or MAX18002AWT+)
- Adjustable DC Power Supply
- Digital Multimeter (x4)
- Electronic Load

## Features and Benefits

- 1.8V to 5.5V Input Voltage
- Test Points for INS, OUTS, and GNDS
- Sense Sockets at LX and OUT
- Output Voltage  Adjustable  Between 2.5V to  5.5V  (in 100mV steps)

319-100983; Rev 0; 02/23

## MAX18002 Evaluation Kit

## Procedure

The simplified EV kit circuit is shown below in Figure 1 and a typical bench setup for MAX18002 EV kit is shown in Figure 4 . The same bench setup and typical application circuit are applicable when evaluating the MAX18000.

Figure 1. Typical Application Circuit

<!-- image -->

Figure 2. MAX18002 Evaluation Board

<!-- image -->

## Evaluates: MAX18000 and MAX18002 in WLP Package

## Evaluates: MAX18000 and MAX18002 in WLP Package

Figure 3. MAX18000 Evaluation Board

<!-- image -->

## MAX18002 Evaluation Kit

## Evaluates: MAX18000 and MAX18002 in WLP Package

Figure 4. EV Kit Connection Block Diagram

<!-- image -->

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Use twisted wires of appropriate gauge that are as short as possible to connect the load and power sources.

1. Identify the connections and test points shown in Figure 4 . Ensure that the EV kit has the correct jumper settings, as shown in Table 2 .
2. Connect a DVM to the INS and GNDS1 pins to measure input voltage.
3. Connect a DVM to the OUTS and GNDS pins to measure output voltage.
4. Set RSEL to 10k Ω (OUT = 5V). See the Output-Voltage Selection section for more information on how to select the RSEL values.
5. Set the power supply to 3.6V (100mA current limit) across the IN and GND terminals of the EV kit. Turn on the power supply.
6. Confirm the DVM connected to OUTS and GNDS reads (5.23V for the MAX18002 and 5.14V for the MAX18000). Confirm the ammeter reads the expected input supply current, which is shown in Table 3 .

## Table 3. Input Current Measurement

| IC VERSION      | INPUT CURRENT   |
|-----------------|-----------------|
| MAX18002WEVKIT# | 3.2mA           |
| MAX18000WEVKIT# | 25µA            |

## MAX18002 Evaluation Kit

## Evaluates: MAX18000 and MAX18002 in WLP Package

When the EV kit operation is verified, increase the current limit on the power supply connected across IN and PGND. Connect an electronic load across OUT and GND terminals to evaluate the performance of the boost regulator.

## EV Kit Hardware

The MAX18002 EV kit demonstrates the MAX18000 or MAX18002 boost converter. The IC can regulate the output voltage between 2.5V and 5.5V from an input supply of 0.5V to 5.5V. The output voltage is set using a single resistor connected at the RSEL pin. See the jumper configuration in Table 2 to configure the EV kit for initial operation.

## Evaluating Different Versions

The EV kit can be ordered with the MAX18000 or the MAX18002 preinstalled. A label on the EV kit denotes the part number populated as U1. A brief description of each of the IC versions is given below for more details regarding the individual version refer to the respective IC datasheets.

- MAX18000AWT+: This is a nano power boost converter with 512nA quiescent current. This version operates in low-power mode at low loads to ensure high efficiency in all load conditions. For this version, V OUT  - V IN  &gt; 0.2V. (The part is always in boost mode).
- MAX18002AWT+: This is an ultrasonic boost converter that operates in ultrasonic mode (F SW  &gt; 22kHz) at low loads to stay away from acoustic audible noise interference.

## Output-Voltage Selection

The resistor connected between the RSEL pin and GND is used to select an output voltage level between 2.5V and 5.5V in 100mV steps. See Table 4 to select the resistor for each output voltage.

## Table 4. RSEL Selection

|   OUTPUT VOLTAGE (V) |   RSEL (kΩ) |
|----------------------|-------------|
|                  2.5 |       768   |
|                  2.6 |       634   |
|                  2.7 |       536   |
|                  2.8 |       452   |
|                  2.9 |       383   |
|                  3   |       324   |
|                  3.1 |       267   |
|                  3.2 |       226   |
|                  3.3 |       191   |
|                  3.4 |       162   |
|                  3.5 |       133   |
|                  3.6 |       113   |
|                  3.7 |        95.3 |
|                  3.8 |        80.6 |
|                  3.9 |        66.5 |
|                  4   |        56.2 |
|                  4.1 |        47.5 |
|                  4.2 |        40.2 |
|                  4.3 |        34   |
|                  4.4 |        28   |

## MAX18002 Evaluation Kit

## Evaluates: MAX18000 and MAX18002 in WLP Package

| OUTPUT VOLTAGE (V)   | RSEL (kΩ)       |
|----------------------|-----------------|
| 4.5                  | 23.7            |
| 4.6                  | 20              |
| 4.7                  | 16.9            |
| 4.8                  | 14              |
| 4.9                  | 11.8            |
| 5.0                  | 10.0            |
| 5.1*                 | 8.45            |
| 5.2*                 | 7.15            |
| 5.3*                 | 5.9             |
| 5.4*                 | 4.99            |
| 5.5*                 | Short to Ground |

## Test Points and Critical Node Measurement

The EV kit comes with holes on the board where a Tektronics miniature probe can be populated for measuring the critical nodes OUT and LX. Populate the OUT and LX pins on the board with the 131-4353-00 Tektronics probe and use the probe to measure OUT and LX if the user wants a very clean measurement with low noise. Following these guidelines will give the most accurate results when measuring parameters like output voltage ripple, switching waveforms, and load transient response.

To measure V IN  and V OUT  voltage levels it is recommended to connect the voltage measurement probes between INS and GNDS for V IN  measurement and OUTS and GNDS for V OUT  measurement. This ensures that the user is measuring the voltage levels at the input and output capacitor after the drop across the PCB traces.

Figure 5. Probing Critical Nodes

<!-- image -->

## Onboard Load

To facilitate easy use of the MAX18002 EV kit, there is an onboard FET (Q1, SI4160DY) with a gate-to-source threshold voltage of approximately 2.4V. The drain of the FET is not connected to the OUT rail by default. To use the onboard FET,

## MAX18002 Evaluation Kit

## Evaluates: MAX18000 and MAX18002 in WLP Package

the pad below the OUT terminal should be connected to terminals 5, 6, 7, and 8 of Q1 as shown in Figure 6 . A voltage higher than the gate threshold voltage can be applied between the gate and source terminals to load the MAX18002 EV kit. There are test points provided on the MAX18002 EV kit, to access the gate and source terminals.

Figure 6. Connecting the Onboard Load

<!-- image -->

## Ordering Information

| PART            | U1 IC         | TYPE               |
|-----------------|---------------|--------------------|
| MAX18002WEVKIT# | MAX18002AWT+T | Ultrasonic Version |
| MAX18000WEVKIT# | MAX18000AWT+T | Nanopower Version  |

## MAX18002 Evaluation Kit

## MAX18002 EV Kit Bill of Materials

| PART                                                                                                   | QTY                                                                                                    | MFG PART #                                                                                             | MANUFACTURER                                                                                           | DESCRIPTION                                                                                            |
|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| C1 - C3                                                                                                | 3                                                                                                      | C1608X5R1A226M080AC; GRM188R61A226ME15; CL10A226MPCNUBE; CL10A226MPMNUB; GRM187R61A226ME15             | TDK; MURATA; SAMSUNG; SAMSUNG; MURATA                                                                  | 22µF; 20%; 10V; X5R; CERAMIC CAPCITOR (0603)                                                           |
| L1                                                                                                     | 1                                                                                                      | DFE201612E-R47M                                                                                        | MURATA                                                                                                 | 470nH; 20%; 4.5A; INDUCTOR (0806)                                                                      |
| U1                                                                                                     | 1                                                                                                      | MAX18002AWT+ or MAX18000AWT+                                                                           | MAXIM                                                                                                  | MAX1800xAWT+; 3A NANO-POWER BOOST WITH PASS-THRU AND SHORT CIRCUIT PROTECTION;                         |
| R1                                                                                                     | 1                                                                                                      | --                                                                                                     | --                                                                                                     | PLACEHOLDER FOR RSEL RESISTOR (DNI)                                                                    |
| Components below this are outside of the immediate MAX18002 evaluation circuit and solution silkscreen | Components below this are outside of the immediate MAX18002 evaluation circuit and solution silkscreen | Components below this are outside of the immediate MAX18002 evaluation circuit and solution silkscreen | Components below this are outside of the immediate MAX18002 evaluation circuit and solution silkscreen | Components below this are outside of the immediate MAX18002 evaluation circuit and solution silkscreen |
| C4, C5                                                                                                 | 2                                                                                                      | TR3D157K016C0150                                                                                       | VISHAY                                                                                                 | 150µF; 10%; 16V; TANTALUM CAPCITOR (7343)                                                              |
| EN, GATE, RSEL                                                                                         | 3                                                                                                      | 5002                                                                                                   | KEYSTONE                                                                                               | TEST POINT; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER                                      |
| GND, IN, OUT                                                                                           | 3                                                                                                      | 108-0740-001                                                                                           | EMERSON NETWORK POWER                                                                                  | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                               |
| GND3, GND4, GNDS, GNDS1, SOURCE                                                                        | 5                                                                                                      | 5001                                                                                                   | KEYSTONE                                                                                               | TEST POINT; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH                         |
| INS, OUTS                                                                                              | 2                                                                                                      | 5000                                                                                                   | KEYSTONE                                                                                               | TEST POINT; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH                           |
| JU1                                                                                                    | 1                                                                                                      | PEC03SAAN                                                                                              | SULLINS                                                                                                | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                              |
| JU2                                                                                                    | 1                                                                                                      | PCC02SAAN                                                                                              | SULLINS                                                                                                | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC               |
| LX, OUT                                                                                                | 2                                                                                                      | 131-4353-00                                                                                            | TEKTRONICS                                                                                             | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS (DNI)                  |

www.analog.com

Analog Devices | 8

Evaluates: MAX18000 and

MAX18002 in WLP Package

## MAX18002 Evaluation Kit

## Evaluates: MAX18000 and MAX18002 in WLP Package

| Q1       |   1 | SI4160DY-T1-GE3              | VISHAY                                  | N-CHANNEL MOSFET; NCH; 5.7W; 25.4A; 30V                                                  |
|----------|-----|------------------------------|-----------------------------------------|------------------------------------------------------------------------------------------|
| R2       |   1 | 3296Y-1-105LF                | BOURNS                                  | THROUGH HOLE POT; 1MΩ; 10%; +/ - 100PPM/DEGC; 0.5W                                       |
| R7       |   1 | CRCW0603180KFK               | VISHAY DALE                             | RES; SMT (0603); 180KΩ; 1%; +/-100PPM/DEGC; 0.1000W                                      |
| SU1, SU2 |   2 | S1100-B; SX1100-B; STC02SYAN | KYCON; KYCON; SULLINS ELECTRONICS CORP. | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; PHOSPHOR BRONZE CONTACT=GOLD PLATED |
| PCB      |   1 | MAX18002W                    | MAXIM                                   | PCB:MAX18002W                                                                            |

## MAX18002 Evaluation Kit

## MAX18002 EV Kit Schematic

<!-- image -->

## Evaluates: MAX18000 and MAX18002 in WLP Package

## MAX18002 Evaluation Kit

## MAX18002 EV Kit Component Placement

EV Kit Component Placement -Top Side

<!-- image -->

EV Kit Component Placement -Bottom Layer

<!-- image -->

Evaluates: MAX18000 and

MAX18002 in WLP Package

EV Kit Component Placement -Top Layer

<!-- image -->

EV Kit Component Placement -Bottom Side

<!-- image -->

## MAX18002 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/23            | Initial release | -               |

<!-- image -->

Evaluates: MAX18000 and

MAX18002 in WLP Package