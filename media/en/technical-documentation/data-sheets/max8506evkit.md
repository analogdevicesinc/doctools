<!-- lastmod 2022-08-02 -->
## General Description

The MAX8506 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that demonstrates the MAX8506 1MHz pulse-width-modulated (PWM) step-down DC-DC converter optimized for powering the power amplifier (PA) in wireless applications. The EV kit can dynamically control the output voltage in the 0.4V to VIN range from a 2.6V to 5.5V input. It can deliver 600mA of load current. The MAX8506 EV kit can also be used to evaluate the MAX8507, which has a different  gain,  and  the  MAX8508, whose output can be externally programmed for fixed 0.75V to 3.4V.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                |
|---------------|-------|--------------------------------------------------------------------------------------------|
| C1            |     1 | 2.2µF ±10%, 6.3V X5R ceramic capacitor (0603) Taiyo Yuden JMK107BJ225K TDK C1608X5R0J225K  |
| C2            |     1 | 4.7µF ±10%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J475K                           |
| C3            |     1 | 0.22µF ±20%, 16V X5R ceramic capacitor (0603) Taiyo Yuden EMK107BJ224MA TDK C1608X7R1C224M |
| C4            |     1 | 1500pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H152K TDK C1608X7R1H152K     |
| C5            |     1 | 0.1µF ±10%, 10V X5R ceramic capacitor (0402) Taiyo Yuden LMK105BJ104KV TDK C1005X5R1A104K  |

<!-- image -->

## Features

- ♦ 2.6V to 5.5V Input Voltage Range
- ♦ 1MHz Fixed-Frequency PWM Switching
- ♦ 600mA Output Current
- ♦ Adjustable Output Voltages 1.76 x REFIN (MAX8506) 2 x REFIN (MAX8507) Set by External Feedback Resistors (MAX8508)
- ♦ Low 0.1µA (typ) Quiescent Current in Shutdown Mode
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE              |
|--------------|------------------|-------------------------|
| MAX8506EVKIT | 0 ° C to +70 ° C | 16 Thin QFN (4mm x 4mm) |

Note: To evaluate the other devices, MAX8507/MAX8508, order a MAX8507ETE/MAX8508ETE free sample with the MAX8506EVKIT.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                          |
|---------------|-------|--------------------------------------------------------------------------------------|
| C6            |     1 | 100pF ±5%, 50V C0G ceramic capacitor (0402) Murata GRP1555C1H101J TDK C1005C0G1H101J |
| L1            |     1 | 4.7µH inductor Sumida CDRH2D18/HP-4R7NC TOKO1001AS-4R7M                              |
| R1            |     1 | 10k Ω ±5% resistor (0603)                                                            |
| R2            |     0 | Not installed, resistor (0402)                                                       |
| U1            |     1 | MAX8506ETE (16-pin thin QFN 4mm x 4mm)                                               |
| JU1, JU2, JU3 |     3 | 3-pin headers                                                                        |
| None          |     3 | Shunts                                                                               |
| None          |     1 | MAX8506 PC board                                                                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX8506 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Murata      | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Sumida      | 847-545-6700 | 847-545-6720 | www.sumida.com        |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| TOKO        | 847-297-0070 | 847-699-1194 | www.tokoam.com        |

Note: Please indicate that you are using the MAX8506/MAX8507/MAX8508 when contacting these component suppliers.

## Quick Start

The MAX8506 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify that a shunt is connected across pins 1 and 2 of jumper JU1 (output enabled).
- 2) Verify that a shunt is connected across pins 2 and 3 of jumper JU2 (high-power bypass mode disabled).
- 3) Verify that a shunt is connected across pins 1 and 2 of jumper JU3 (PWM mode enabled).
- 4) Connect a voltmeter across the VOUT and the GND pads to monitor the output voltage.
- 5) Connect a 2.6V to 5.5V power supply to the VIN pad. Connect the power-supply ground terminal to the GND pad.
- 6) Connect a 1V power supply to the REFIN pad. Connect the power-supply ground terminal to the GND pad.
- 7) Turn on the power supplies and verify that the output voltage is 1.76V.

## Detailed Description

The MAX8506 EV kit circuit board demonstrates the MAX8506 1MHz, PWM, step-down DC-DC converter circuit  that  is  optimized  to  power  the  PA  in  wireless applications. The EV kit requires a power supply in the 2.6V to 5.5V range, and has an output voltage dynamically  controlled  by  REFIN. The EV kit board features

## Table 1. Jumper JU1 ( SHDN )

| SHUNT LOCATION   | SHDN PIN              | MAX8506 OUTPUT                                                                             |
|------------------|-----------------------|--------------------------------------------------------------------------------------------|
| Pins 1 and 2     | Connected to VIN      | Output enabled, VOUT = 1.76 x REFIN                                                        |
| Pins 2 and 3     | Connected to GND      | Shutdown, VOUT = 0V                                                                        |
| None             | Connected to SHDN pad | Output controlled by the user (user-supplied control signal must be connected to SHDN pad) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

jumpers that enable the user to configure the shutdown, SKIP/PWM, and high-power (HP) bypass modes.

## Shutdown Mode

The EV kit contains jumper JU1 to allow the user to switch the MAX8506 converter from enable to shutdown mode. Shutdown mode reduces the supply current to 0.1µA (typ) and sets the output voltage to 0V. See Table 1 for JU1 configurations.

## High-Power Bypass Mode

Jumper JU2 allows the user to enable or disable the high-power bypass mode of the MAX8506 converter. When the high-power mode is enabled, the converter stops regulating the output voltage and the output voltage, VOUT, is equal to the input voltage, VIN. When the high-power mode is disabled, the converter regulates the output voltage to the programmed voltage. See Table 2 for JU2 configuration. Removing the shunt on jumper JU2 and applying a CMOS logic-level signal to the HP pad on the EV kit board can also control the high-power bypass mode.

## Skip/PWM Mode

Installing  a  shunt  across  pins  2  and  3  of  jumper  JU3 enables skip-mode operation. This allows automatic PWM control at medium and heavy current loads, and skip mode at light current loads to improve efficiency and reduce quiescent current. Installing a shunt across pins 1 and 2 of JU3 enables forced-PWM operation. Forced-PWM operation is desirable in sensitive RF and data-acquisition applications to ensure that switching harmonics do not interfere with sensitive IF and data-

## Table 2. Jumper JU2 (HP)

| SHUNT LOCATION   | HP PIN              | EV KIT OPERATION                                                                         |
|------------------|---------------------|------------------------------------------------------------------------------------------|
| Pins 1 and 2     | Connected to VIN    | High-power bypass mode enabled, VOUT = VIN                                               |
| Pins 2 and 3     | Connected to GND    | High-power bypass mode disabled                                                          |
| None             | Connected to HP pad | Output controlled by the user (user-supplied control signal must be connected to HP pad) |

## Table 3. Jumper JU3 ( SKIP )

| SHUNT LOCATION   | SKIP PIN              | OPERATION MODE                                                                                     |
|------------------|-----------------------|----------------------------------------------------------------------------------------------------|
| Pins 1 and 2     | Connected to VIN      | PWM mode at all loads                                                                              |
| Pins 2 and 3     | Connected to GND      | SKIP mode at light loads and PWM mode at medium and heavy loads                                    |
| None             | Connected to SKIP pad | Operation mode controlled by the user (user-supplied control signal must be connected to SKIP pad) |

sampling frequencies. Forced-PWM operation uses higher supply current with no load compared to skip mode. See Table 3 for JU3 configuration.

## Evaluating the MAX8507/MAX8508

The MAX8506 EV kit circuit board comes with the MAX8506 converter installed. The MAX8506 EV kit board can also be used to evaluate the MAX8507/ MAX8508 converters. To evaluate the MAX8507 with the MAX8506 EV kit, replace the MAX8506ETE with the MAX8507ETE, and change R1 to 15k Ω and C4 to 1000pF.

<!-- image -->

To evaluate the MAX8508 with the MAX8506 EV kit, replace the MAX8506ETE with the MAX8508ETE, remove C5, and then install feedback resistors on R2 and C5 pads. Change R1 to 5.62k Ω and C4 to 2700pF. The output voltage, VOUT, can be adjusted in the 0.75V to  3.4V  range.  Select  a  feedback  resistor,  RFeedback, between 5k Ω and 50k Ω and install on the C5 pads. R2 is determined by the following equation:

<!-- formula-not-decoded -->

where VFB = 0.75V and VOUT is the desired output voltage.

Care should be taken when soldering or desoldering the exposed paddle under the IC.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8506 Evaluation Kit

## MAX8506 Evaluation Kit

Figure 1. MAX8506 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX8506 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX8506 Evaluation Kit

Figure 3. MAX8506 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX8506 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5