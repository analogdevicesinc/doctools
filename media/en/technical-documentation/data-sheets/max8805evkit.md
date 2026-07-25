<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX8805W evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) that demonstrates the highly integrated MAX8805W stepdown DC-DC converter optimized for dynamically powering the power amplifier (PA) in WCDMA or NCDMA handsets. The MAX8805W EV kit can dynamically control the step-down output voltage in the 0.32V to VBATT range from a 2.7V to 5.5V input-voltage range, and delivers 650mA of load current in low-power mode. In high-power mode, the step-down output is directly connected to the input by the internal 60m Ω bypass pFET. Two low-noise  LDOs  are  also  integrated  in  the MAX8805W. The MAX8805W EV kit can also evaluate the MAX8805X/MAX8805Y/MAX8805Z. To evaluate the MAX8805X/MAX8805Y/MAX8805Z, order a free sample along with this EV kit.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| C1, C2, C3    |     3 | 2.2µF ±10%, 16V X5R ceramic capacitors (0603) Murata GRM188R61C225KE |
| C4            |     1 | 0.22µF ±10%, 10V X5R ceramic capacitor (0402) Murata GRM155R61A224KE |
| C5, C6        |     2 | 1µF ±10%, 10V X5R ceramic capacitors (0603) Murata GRM185R61A105KE   |
| JU1-JU4       |     4 | 3-pin headers Sullins PTC36SAAN Digi-Key S1012-36-ND                 |
| L1            |     1 | 2.2µH inductor FDK MIPF2520D2R2 (1.3A, 80m Ω , 2.5mm x 2mm x 1mm)    |
| L2            |     1 | 1µH inductor FDK MIPF2520D1R0 (1.5A, 50m Ω , 2.5mm x 2mm x 1mm)      |
| U1            |     1 | MAX8805WEWEEE+ (16-bump WLP, 2mm x 2mm)                              |
| -             |     1 | PCB: MAX8805W Evaluation Kit+                                        |

- ♦ PA Step-Down Converter

7.5 µ s (typ) Settling Time for 0.8V to 3.4V OutputVoltage Change

Dynamic Output-Voltage Setting from 0.32V to VBATT

60mΩ pFET and 100% Duty Cycle for Low Dropout

2MHz or 4MHz Switching Frequency

Low Output-Voltage Ripple

650mA Output Drive Capability

(MAX8805W/MAX8805X)

600mA Output Drive Capability

(MAX8805Y/MAX8805Z)

2% Maximum Accuracy

- ♦ Dual Low-Noise LDOs Low 35 µ VRMS (typ) Output Noise High 70dB (typ) PSRR Guaranteed 200mA Output Drive Capability Individual ON/OFF Control
- ♦ Tiny External Components
- ♦ Low 0.1 µ A Shutdown Current
- ♦ 2.7V to 5.5V Supply Voltage Range
- ♦ Thermal Shutdown
- ♦ Tiny 2mm x 2mm x 0.7mm WLP Package (4 x 4 Grid)
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           |
|----------------|
| MAX8805WEVKIT+ |

+Denotes lead-free and RoHS-compliant.

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE         |
|-----------------------|--------------|-----------------|
| Digi-Key Corp.        | 800-344-4539 | www.digikey.com |
| FDK Corp.             | 408-432-8331 | www.fdk.co.jp   |
| Murata Mfg. Co., Ltd. | 814-237-1431 | www.murata.com  |

Note: Indicate that you are using the MAX8805W when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Features

## MAX8805W Evaluation Kit

## Quick Start

## Recommended Equipment

Before  beginning,  the  following  equipment  is needed:

- Variable 6V power supply capable of delivering 2A (referred to as PS1)
- Variable 6V power supply capable of delivering 100mA (referred to as PS2)
- One voltmeter
- Load resistors or electronic loads capable of 650mA

## Procedure

The MAX8805W EV kit is a fully assembled and tested surface-mount PCB. Follow the steps below to verify board operation. Caution: Do not turn on the power supplies until all connections are completed.

- 1) Place the JU2, JU3, and JU1 shunts across pins 1-2 to enable the PA step-down, LDO1, and LDO2 outputs.
- 2) Place the JU4 shunt across pins 2-3 to disable bypass mode.
- 3) Preset PS1 to 3.6V and PS2 to 0.6V. Turn off the power supplies.
- 4) Connect the positive lead of the PS1 power supply to the IN1 and IN2 pads. Connect the negative lead of the PS1 power supply to the PGND pad.
- 5) Connect the positive lead of the PS2 power supply to the REFIN pad. Connect the negative lead of the PS2 power supply to the AGND pad.
- 6) Turn on the power supplies.
- 7) Verify that the voltage is 1.5V at the VPA pad.
- 8) Verify that the voltage is 2.85V at the LDO1 pad.
- 9) Verify that the voltage is 2.85V at the LDO2 pad.
- 10) Change JU4 shunt from pins 2-3 to pins 1-2 to enable bypass mode.
- 11) Verify that the voltage is approximately 3.6V at the VPA pad.

## Detailed Description

## PA Step-Down Converter

The MAX8805\_ PA step-down converter is designed to dynamically power the PA in WCDMA and NCDMA handsets. It delivers over 650mA of load current. The hysteretic PWM control scheme provides extremely fast transient  response, while 2MHz and 4MHz switchingfrequency options allow the trade-off between efficiency and the smallest external components. A 60m Ω bypass pFET connects the PA output directly to the battery during high-power transmission.

## Bypass Mode

During high-power transmission, the bypass mode connects IN1 directly to VPA with the internal 60m Ω (typ) bypass pFET, while the step-down converter is forced into 100% duty-cycle operation. The low on-resistance in this mode provides low dropout, long battery life, and high output current capability.

## Forced and Automatic Bypass Mode

Invoke forced bypass mode by driving HP high, or invoke automatic bypass mode by applying a high voltage to REFIN. To prevent excessive output ripple as the stepdown converter approaches dropout, the MAX8805W/ MAX8805X enter bypass mode automatically when VREFIN &gt; 0.372 x VIN2. Note that IN2 is used instead of IN1 to prevent switching noise from causing false engagement of automatic bypass mode. For this reason, IN2 must be connected to the same source as IN1.

The MAX8805Y/MAX8805Z enter bypass mode automatically when VREFIN &gt; 0.465 x VIN2.

## Analog REFIN Control

The MAX8805\_ PA step-down converter uses REFIN to set the output voltage. The output voltage is regulated at  2.5  x  (MAX8805W/X) or 2 x (MAX8805Y/Z) the voltage applied at REFIN. This allows the converter to operate in applications where dynamic voltage control is required.

## LDO1 and LDO2

Dual 200mA low-noise, high-PSRR low-dropout regulators (LDOs) for PA biasing are integrated in the MAX8805\_. LDO1 and LDO2 output voltages are determined by the part number suffix. The EV kit comes with the MAX8805WEWEEE+ installed, which has 2.85V output voltage for both LDOs. Refer to the Output Voltages section of the MAX8805\_ IC data sheet for more outputvoltage options.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8805W Evaluation Kit

Smaller output capacitors can be used for LDO1 and LDO2 if they are used at less than full-load capability. Refer to the MAX8805\_ IC data sheet for more information.

## Shutdown Mode

The PA step-down converter, LDO1, and LDO2 are individually enabled or disabled with jumpers JU2, JU3, and JU1, respectively (Table 1).

When the PA step-down and LDOs are all in shutdown, the MAX8805\_ enters a very low-power state, where the input current drops to 0.1µA (typ).

## Table 1. Jumper Function

| LABEL (JUMPER)   | POSITION                       | POSITION                       |
|------------------|--------------------------------|--------------------------------|
| LABEL (JUMPER)   | 1-2                            | 2-3                            |
| EN2 (JU1)        | Enable LDO2                    | Disable LDO2                   |
| PA_EN (JU2)      | Enable PA step- down converter | Disable PA step-down converter |
| EN1 (JU3)        | Enable LDO1                    | Disable LDO1                   |
| HP (JU4)         | Enable bypass mode             | Disable bypass mode            |

<!-- image -->

## Thermal Shutdown

Thermal shutdown limits total power dissipation in the MAX8805\_. If the junction temperature exceeds +160°C, thermal-shutdown circuitry turns off the IC, allowing it to cool. The IC turns on and begins soft-start after  the  junction  temperature cools by +20°C. This results  in  a  pulsed  output  during  continuous  thermaloverload conditions.

## Evaluating the MAX8805X/MAX8805Y/MAX8805Z

For evaluating the MAX8805Y, carefully remove the MAX8805W (U1) and install the MAX8805Y IC. Other components remain the same. For evaluating the MAX8805X/MAX8805Z, in addition to changing U1, the inductor L1 also needs to be replaced by the extra inductor (L2) on the EV kit.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8805W Evaluation Kit

Figure 1. MAX8805W EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8805W Evaluation Kit

<!-- image -->

Figure 2. MAX8805W EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8805W Evaluation Kit

Figure 3. MAX8805W EV Kit PCB Layout-Top Layer

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8805W Evaluation Kit

Figure 4. MAX8805W EV Kit PCB Layout-Bottom Layer

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 7

Boblet