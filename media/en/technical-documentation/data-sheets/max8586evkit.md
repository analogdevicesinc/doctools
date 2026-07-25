<!-- lastmod 2022-08-03 -->
## General Description

The MAX8586 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board demonstrating the MAX8586 1.2A USB switch. The EV kit operates from a 2.7V to 5.5V input power supply and is capable of  sourcing up to 1.2A. The MAX8586 features an adjustable current limit and autorestart for overload and short-circuit protection. A 20ms fault-blanking time prevents erroneous faults caused by load transients and capacitive loads. The MAX8586 is assembled in the space-saving 8-lead 3mm x 3mm TDFN package.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| C1, C2        |     2 | 1µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K or equivalent |
| JU1, JU2, JU3 |     3 | 3-pin headers                                                                |
| R1            |     1 | 100k Ω ±5% resistor (0603)                                                   |
| R2            |     1 | 26.1k Ω ±1% resistor (0603)                                                  |
| U1            |     1 | MAX8586ETA                                                                   |
| None          |     3 | Shunts                                                                       |
| None          |     1 | MAX8586 EV kit PC board                                                      |

<!-- image -->

## Features

- ♦ Tiny 8-Lead 3mm x 3mm TDFN Package
- ♦ Reverse-Current Blocking
- ♦ Programmable Current Limit
- ♦ Autorestart When Fault Is Removed
- ♦ 14% Accurate Current Limit
- ♦ Up to 1.2A Load Current
- ♦ Thermal Overload Protection
- ♦ Built-In 20ms Fault-Blanking
- ♦ Compliant to All USB Specifications
- ♦ 2.7V to 5.5V Input Supply Range
- ♦ FAULT Indicator Output
- ♦ Active-High/Active-Low Select Pin
- ♦ UL Listing Pending
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE       |
|--------------|--------------|------------------|
| MAX8586EVKIT | 0°C to +70°C | 8 TDFN 3mm x 3mm |

## Component Suppliers

| SUPPLIER    | COMPONENT   | PHONE        | WEBSITE               |
|-------------|-------------|--------------|-----------------------|
| Taiyo Yuden | Capacitors  | 408-573-4150 | www.t-yuden.com       |
| TDK         | Capacitors  | 888-835-6646 | www.component.tdk.com |
| Vishay      | Resistors   | 402-563-6866 | www.vishay.com        |

Note: Indicate that you are using the MAX8586 EV kit when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- 0 to 6V, 1.5A variable power supply
- 1 digital multimeter (DMM)
- Dummy load capable of sinking 1.2A

## Procedure

The MAX8586 EV kit is fully assembled and tested. Follow these steps to verify board operation:

- 1) Preset the power supply to 2.7V and turn off. Do not turn the power supply on until all connections are made.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX8586 Evaluation Kit

- 2) Verify on the MAX8586 EV kit that there is a shunt across pins 1 and 2 of JU1 and JU2 to enable the device.
- 3) Connect the positive lead of the power supply to the VIN pad on the EV kit and the negative lead of the power supply to the GND pad on the EV kit.
- 4) Connect the positive lead of the DMM to the VOUT pad on the EV kit and the negative lead of the DMM to the GND pad on the EV kit to measure the output voltage.
- 5) Turn on the power supply and sweep the input voltage from 2.7V to 5.5V.
- 6) Verify  that  the  output  voltage  tracks  the  voltage  at VIN over the entire input range.
- 7) Set the power supply to 5V.
- 8) Connect the 1.2A load between the VOUT and GND pads on the EV kit.
- 9) Verify that the output voltage is approximately 5V.

## Detailed Description

## FAULT

The MAX8586 provides an open-drain fault output ( FAULT )  to  indicate  that  a  fault  has  occurred.  In  the MAX8586 EV kit, the FAULT output is connected to VIN through a 100k Ω pullup resistor. FAULT asserts low when any of the following conditions occur:

- The input voltage is below the UVLO threshold.
- The switch junction temperature exceeds the +160°C thermal-shutdown temperature limit.
- The switch is in current-limit or short-circuit currentlimit  mode after the fault-blanking period (20ms) expires.
- A reverse-current condition exists after the faultblanking period expires.

## Table 1. Jumper JU1 and JU2 Functions (ON/OFF Control)

| JU1 SHUNT LOCATION   | JU2 SHUNT LOCATION   | SEL              | ON               | USB SWITCH STATE   |
|----------------------|----------------------|------------------|------------------|--------------------|
| 1 and 2              | 1 and 2              | Connected to VIN | Connected to VIN | On                 |
| 2 and 3              | 1 and 2              | Connect to GND   | Connected to VIN | Off                |
| 1 and 2              | 2 and 3              | Connected to VIN | Connect to GND   | Off                |
| 2 and 3              | 2 and 3              | Connect to GND   | Connect to GND   | On                 |

## Table 2. Jumper JU3 Function (Autorestart Control)

| JU3 SHUNT LOCATION   | ENRESET          | AUTORESTART   |
|----------------------|------------------|---------------|
| 1 and 2              | Connected to VIN | Enabled       |
| 2 and 3              | Connected to GND | Disabled      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

The FAULT output goes high impedance after a 20ms delay once the fault condition is removed. Refer to the MAX8586 data sheet for more details on fault protection and fault blanking.

## Shutdown (SEL, ON)

SEL sets the active polarity of the logic input, ON. JU1 is  provided to select the connection to SEL. Place a jumper between pins 1 and 2 of JU1 to connect SEL to VIN and make ON an active-high input. Place a jumper between pins 2 and 3 of JU1 to connect SEL to GND and make ON an active-low input. See Table 1.

JU2 is provided for ON control. Connect a shunt across pins 1 and 2 of JU2 to connect ON to VIN. Connect a shunt across pins 2 and 3 of JU2 to connect ON to GND. The output of a disabled switch enters a highimpedance state.

## Setting the Current Limit

The current limit for the MAX8586 is user programmable using the ISET input. Connect a resistor from ISET to GND (R2) to set the current limit. The value for R2 is calculated as:

I LIMIT = 1.4A x 26k Ω / R2

R2 must be between 26k Ω and 60k Ω .

## Autorestart (ENRESET)

The MAX8586 features an autorestart function that tests an overloaded output with a 25mA current to determine when the overload or short circuit has been released. JU3 is available to enable or disable the autorestart function (see Table 2). Place a shunt between positions 1 and 2 of JU3 to enable autorestart. Place a shunt between positions 2 and 3 of JU3 to disable autorestart.  Refer to the MAX8586 data sheet for more details on the autorestart function.

## Jumper Settings

Figure 1. MAX8586 EV Kit Schematic

<!-- image -->

Figure 3. MAX8586 EV Kit PC Board Layout-Component Side

<!-- image -->

## MAX8586 Evaluation Kit

Figure 2. MAX8586 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Figure 4. MAX8586 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3