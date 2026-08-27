<!-- lastmod 2022-08-03 -->
## General Description

The MAX4209 evaluation kit (EV kit) simplifies evaluation of  the  MAX4208 ultra-low offset/drift, fixed gain, precision instrumentation amplifier in a µMAX ® package. The MAX4209 features high-impedance differential inputs optimized for small voltages (±100mV max) and provides rail-to-rail output. The MAX4209 EV kit circuit uses the 100V/V fixed-voltage-gain version of the MAX4209. The EV kit operates from a single-supply voltage between 2.85V and 5.5V, or dual supplies providing ±1.425V to ±2.75V.

The MAX4209 EV kit can also evaluate the 10V/V and 1000V/V fixed-gain versions of the MAX4209 amplifiers, as well as the MAX4208 adjustable-gain amplifier. The MAX4209 IC temperature range is -40°C to +125°C.

The MAX4208 EV kit, available separately, evaluates the MAX4208 adjustable-gain amplifier with external gain-setting resistors.

Note: To evaluate a MAX4208 IC featuring externally adjustable gain, order a MAX4208EVKIT+ or request a free sample of the MAX4208AUA+ IC along with the MAX4209EVKIT+. For the alternate-gain versions of the MAX4209 IC, see the Part Selection Table for IC ordering information.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                |
|---------------|-------|--------------------------------------------------------------------------------------------|
| C1, C3        |     2 | 10µF ±10%, 10V X5R ceramic capacitors (0805) Murata GRM21BR61A106K KEMET C0805C106K8PAC    |
| C2, C4, C5    |     3 | 0.1µF ±10%, 10V X5R ceramic capacitors (0402) Murata GRM155R61A104K KEMET C0402C104K8RACTU |
| C6, C7        |     0 | Not installed, capacitors (0603)                                                           |
| C8            |     1 | 1000pF ±10%, 16V X5R ceramic capacitor (0402) Murata GRM155R61C102K                        |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

<!-- image -->

Features

- ♦ Single- or Dual-Supply Operation 2.85V to 5.5V Single-Supply Operation ±1.425V to ±2.75V Dual-Supply Operation
- ♦ 100V/V Fixed Voltage Gain
- ♦ Rail-to-Rail Output
- ♦ Configurable Reference Voltage: Externally or Internally Buffered
- ♦ Optional Current-Sense Mode
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX4209EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                     |
|---------------|-------|---------------------------------|
| JU1           |     1 | 4-pin header                    |
| JU2, JU3      |     2 | 2-pin headers                   |
| R1, R2        |     0 | Not installed, resistors (0805) |
| R3, R4        |     2 | 4.99k Ω ±1% resistors (0603)    |
| R5, R6        |     0 | Not installed, resistors (0603) |
| R7            |     0 | Not installed, resistor (1206)  |
| U1            |     1 | MAX4209HAUA+ (8-pin µMAX)       |
| -             |     3 | Shunts                          |
| -             |     1 | PCB: MAX4209 Evaluation Kit+    |

## Part Selection Table

| PART         | GAIN (V/V)   |
|--------------|--------------|
| MAX4208AUA+  | Adjustable   |
| MAX4209TAUA+ | 10           |
| MAX4209HAUA+ | 100          |
| MAX4209KAUA+ | 1000         |

1

## MAX4209 Evaluation Kit

## Procedure

The MAX4209 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify  that  a  shunt  is  installed  across  pins  1-4  of jumper JU1 (on-board buffered-reference mode).
- 2) Verify that a shunt is installed on jumper JU2 (singlesupply operation).
- 3) Verify that a jumper is not installed on jumper JU3 (buffered-reference mode).
- 4) Set the DC power-supply output to 5V and disable the output.
- 5) Set the function generator output to a 10mVP-P, 200Hz, 0V DC offset sine wave. Terminate the function generator as needed.
- 6) Connect the power-supply positive output to the VDD PCB pad on the EV kit.
- 7) Connect the power-supply ground to the GND PCB pad next to VDD on the EV kit.
- 8) Connect the function generator output across the differential input PCB pads, IN+ and IN-.
- 9) Connect the IN- PCB pad to the GND PCB pad with a wire.
- 10) Connect the oscilloscope to the OUT PCB pad and the oscilloscope ground clip to the GND PCB pad.
- 11) Enable the DC power supply and the function generator.
- 12) Verify that the oscilloscope measures a 1VP-P, 200Hz, 2.5V DC offset sine wave.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE        |
|-----------------------|--------------|----------------|
| IRC                   | 361-992-7900 | www.irctt.com  |
| KEMET Corp.           | 864-963-6300 | www.kemet.com  |
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com |

Note: Indicate that you are using the MAX4208 or MAX4209 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- 5V, 1A-rated DC power supply
- Function generator
- Oscilloscope

## Detailed Description

The MAX4209 EV kit evaluates the MAX4209 instrumentation amplifier that features internally fixed gain, low offset voltage, and low offset voltage drift.  The  output-voltage range is from VSS + 100mV, to VDD - 100mV. The MAX4209 EV kit voltage gain is fixed at 100V/V. The EV kit  operates from a single-supply voltage between 2.85V and 5.5V or from a dual-supply voltage providing ±1.425V to ±2.75V.

The MAX4209 EV kit can evaluate the 10V/V or 1000V/V versions of the MAX4209 ICs and the adjustable-gain MAX4208 IC in the 8-pin µMAX package by replacing the  MAX4209 IC (U1). Install gain-setting resistors R1 and R2 for MAX4208 evaluation.

## Power Supply

The MAX4209 EV kit jumper JU2 must be configured properly for single-supply or dual-supply operation. For single-supply operation, a single power supply is connected to VDD and GND. For dual-supply operation, connect a positive supply to VDD, a negative supply to VSS, and supply ground to GND. See Table 1 to configure jumper JU2.

## Table 1. Power-Supply Configuration (Jumper JU2)

| SHUNT POSITION   | VSS PIN          | EV KIT FUNCTION                           |
|------------------|------------------|-------------------------------------------|
| Installed        | Connected to GND | Single-supply operation. Power only VDD.  |
| Not installed    | Not connected    | Dual-supply operation. Power VDD and VSS. |

<!-- image -->

## REFIN/MODE Operation Modes

The EV kit jumper JU1 configures the MAX4209 for direct reference, buffered reference, or shutdown mode. The reference voltage at REF sets the output voltage DC signal,  OUT, when the differential input signal VIN+ -  VINequals zero. In direct-reference-mode operation, connect a user reference voltage directly to the REF PCB pad. In buffered-reference-mode operation, connect a user reference voltage to the REFIN/MODE input PCB pad or use the resistor-divider network R3 and R4 to provide a reference voltage for REFIN/MODE, scaled from VDD. The network is configured to scale the voltage at REFIN/MODE to one-half of VDD. Replace resistors R3 and R4 to modify the voltage applied to REFIN/MODE using the following equation:

<!-- formula-not-decoded -->

where VDD is the input supply voltage to the EV kit.

In  buffered-reference mode, the MAX4209 internally buffers the REFIN/MODE voltage onto REF.

Note: Do not connect an external source to the REF PCB pad in buffered-reference mode. See Table 2 for jumper JU1 configurations.

## MAX4209 Evaluation Kit

## REF Input

The EV kit's jumper JU3 must be configured properly for  appropriate reference-voltage operation. In direct reference mode, install a shunt on jumper JU3 to connect REF to the on-board ground (GND), or remove the shunt to connect a user reference voltage to the REF input PCB pad. For either buffered-reference mode, REF must not be connected to a reference voltage; thus,  the  shunt  on  jumper  JU3  must not be installed. See Table 2 for jumper JU3 configurations.

Optional capacitor C6 can be used for reference-voltage stability/filtering.  Choose  an  appropriate  value  as needed.

## On-Board Current Sensing

The MAX4209 EV kit can be configured for on-board current sensing by installing a surface-mount 1206 sense resistor at R7, located between the IN+ and INPCB pads. Use the following equation to select the value for resistor R7:

<!-- formula-not-decoded -->

where IIN is the maximum current flowing across resistor R7 and 30mV is a suggested sense voltage. 30mV x 100V/V  gives  a  3V  output  swing.  Refer  to  the

Table 2. Jumpers JU1 and JU3 Configurations

| MODE                                                     | JU1 SHUNT POSITION   | REFIN/MODE PIN                      | JU3 SHUNT POSITION   | REF PIN                            | EV KIT FUNCTION                                                                                                                                                                                                             |
|----------------------------------------------------------|----------------------|-------------------------------------|----------------------|------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Direct- reference-mode operation                         | 1-2                  | Connected to VSS                    | Installed Not        | Connected to GND Connected to user | JU1 disables the internal REF buffer. JU3 sets the REF voltage to GND. JU1 disables the internal REF buffer. JU3 allows the user to set the REF voltage directly. Apply a                                                   |
| Shutdown mode                                            | 1-3                  | Connected to VDD                    | -                    | -                                  | Entire IC is in shutdown. I CC < 5µA.                                                                                                                                                                                       |
| Buffered- reference-mode operation (on- board reference) | 1-4                  | Connected to VDD / 2                | Not installed        | Not connected                      | The IC buffers the on-board VDD / 2 onto REF. Do not install JU3 or connect an external source to the REF PCB pad.                                                                                                          |
| Buffered- reference-mode operation (user reference)      | Not installed        | Connected to user reference voltage | Not installed        | Not connected                      | The IC buffers a user reference voltage onto REF. Apply a user reference voltage to the REFIN/MODE PCB pad in the range of VSS + 200mV and VDD - 1.6V. Do not install JU3 or connect an external source to the REF PCB pad. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4209 Evaluation Kit

MAX4208/MAX4209 IC data sheet for application details. Verify that the selected resistor is rated for the appropriate current and power levels.

For high-power applications, use the IN+ and IN- PCB pads as sense connections to an off-board currentsense resistor.

## Differential Input Filter

The MAX4209 EV kit features an optional balanceddifferential resistor-capacitor filter across the MAX4209 IN+ and IN- input pins. Use the surface-mount 0603 PCB pads for installing resistors R5, R6, and capacitor C7, which form the filter. Before installing resistors R5 and R6, cut open the shorting PCB trace located at the respective pads.

## Evaluating the MAX4208 and an Alternate MAX4209

The MAX4209 EV kit can evaluate the adjustable-gain MAX4208 and alternate-voltage-gain versions of the MAX4209 in the 8-pin µMAX package by replacing the IC (U1). Install gain-setting resistors R1 and R2 for MAX4208 evaluation. The MAX4209 features alternatefixed gains of 10V/V or 1000V/V. See the Part Selection Table for IC ordering information.

The MAX4208 EV kit is also available separately.

Figure 1. MAX4209 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 2.  MAX4209 EV Kit Component Placement Guide(Component Side)

<!-- image -->

## MAX4209 Evaluation Kit

Figure 3.  MAX4209 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4209 Evaluation Kit

Figure 4.  MAX4209 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

CARDENAS