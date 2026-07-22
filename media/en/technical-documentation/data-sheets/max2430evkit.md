<!-- lastmod 2022-08-02 -->
<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

The MAX2430EVKIT-SO and MAX2430EVKIT-QSOP evaluation kits (EV kits) simplify evaluation of the MAX2430 silicon RF power amplifier. They enable testing of all MAX2430 functions over the 800MHz to 950MHz band, with no additional support circuitry and with minimal equipment.

To  evaluate  the  MAX2430  in  the  SO  package (MAX2430ISE), order the MAX2430EVKIT-SO. To evaluate the  MAX2430 in the PwrQSOP package, order the MAX2430EVKIT-QSOP. These are surface-mount packages.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART                 | TEMP. RANGE   | IC PACKAGE   |
|----------------------|---------------|--------------|
| MAX2430EVKIT-PwrQSOP | 0°C to +70°C  | 16 PwrQSOP   |
| MAX2430EVKIT-SO      | 0°C to +70°C  | 16 Narrow SO |

- ' Low-Cost, Silicon RF Power Amplifier
- ' Delivers More than 125mW Output Power from +3.6V Supply
- ' Single +3V to +5.5V Supply Range, Ideal for 3-Cell NiCd or 1-Cell Lithium-Ion Battery Operation
- ' Output Matching Network is Tunable from 800MHz to 950MHz
- ' TTL/CMOS-Compatible Shutdown Input
- ' Easy Testing of All MAX2430 Features
- ' Fully Assembled and Tested Surface-Mount Package

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

## MAX2430EVKIT-SO

| DESIGNATION   |   QTY | DESCRIPTION                                          |
|---------------|-------|------------------------------------------------------|
| C1-C5         |     5 | 1nF, 10% ceramic chip capacitors (0805)              |
| C6            |     1 | 2.2nF, 10% ceramic chip capacitor (0805)             |
| C7            |     1 | 1µF, 10V, 10% tantalum capacitor SMT AVX TAJA105K016 |
| CO, CSH       |     2 | 0pF to 6pF SMT trimmer capacitors Voltronics JR060   |
| L1, L2        |     2 | 8nH, 10% spring inductors Coilcraft A03T             |
| LC            |     1 | 47nH, 20% inductor Coilcraft 0805CS-470XMBC          |
| RC            |     1 | 470 Ω , 5% resistor (0805)                           |
| PIN, POUT     |     2 | SMA connectors                                       |
| U1            |     1 | MAX2430ISE                                           |
| VCC, GND      |     2 | Supply connectors                                    |
| J1            |     1 | 3-pin header                                         |
| None          |     1 | Shunt                                                |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER   | PHONE          | FAX            |
|------------|----------------|----------------|
| AVX        | (803) 946-0690 | (803) 626-3123 |
| Coilcraft  | (847) 639-6400 | (847) 639-1469 |
| Sprague    | (603) 224-1961 | (603) 224-1430 |
| Voltronics | (201) 586-8585 | (201) 586-3404 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

## MAX2430EVKIT-PwrQSOP

| DESIGNATION   |   QTY | DESCRIPTION                                          |
|---------------|-------|------------------------------------------------------|
| C1-C5         |     5 | 1nF, 10% ceramic chip capacitors (0603)              |
| C6            |     1 | 2.2nF, 10% ceramic chip capacitor (0603)             |
| C7            |     1 | 1µF, 10V, 10% tantalum capacitor SMT AVX TAJA105K016 |
| CO, CSH       |     2 | 0pF to 6pF SMT trimmer capacitors Voltronics JR060   |
| L1            |     1 | 8nH, 10% spring inductor Coilcraft A03T              |
| L2            |     1 | 12nH, 10% spring inductor Coilcraft A04T             |
| LC            |     1 | 47nH, 20% inductor Coilcraft 0805CS-470XMBC          |
| RC            |     1 | 470 Ω , 5% resistor (0603)                           |
| PIN, POUT     |     2 | SMA connectors                                       |
| U1            |     1 | MAX2430IEE                                           |
| VCC, GND      |     2 | Supply connectors                                    |
| J1            |     1 | 3-pin header                                         |
| None          |     1 | Shunt                                                |

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## MAX2430 Evaluation Kits

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX2430 EV kits are fully assembled and factory tested. All measurements described below use a 900MHz test frequency. Do not turn on the power until all connections are made.

## Test Equipment Required

- Signal-Source Sine-Wave Generator with range up to 1000MHz (example:  HP8656B)
- Spectrum Analyzer with range up to 4GHz (example: TEK2755AP)
- +3V to +5.5V, 400mA adjustable output power supply
- Current meter that can display up to 400mA

## Connections and Signal Conditions

- 1) Connect an SMA cable from the RF signal source to the PIN input on the EV kit. Ensure that the RF powersource input power is off or set below -50dBm.
- 2) Connect an SMA cable from the spectrum analyzer to the POUT connector on the EV kit. Note that if the front  end  of  the  spectrum  analyzer  can  not  handle more than 20dBm of input power, you must place an appropriate attenuator between the POUT connector and the spectrum analyzer to prevent damage.
- 3) Connect the 3V power supply through a current meter to the appropriate VCC and GND terminals on the EV kit, and apply power.
- 4) Position the J1 shunt across pins 1 and 2 to enable the  MAX2430 ( SHDN = high). Note that the normal bias current drawn by the MAX2430 EV kit should be approximately 30mA to 60mA over the 3V to 5.5V supply range when no RF input power is applied.
- 5) Set the input power to -20dBm and the frequency to 900MHz on the signal source.
- 6) Set the spectrum analyzer's dynamic range and frequency range for an appropriate setting to view the 900MHz output.
- 7) Tune the output stage matching network for maximum output power at 900MHz. See the Adjustments and Control section for the CO and CSH trim-capacitor tuning procedure

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Analysis

- 1) Set the RF source power to -13dBm. At 900MHz, the spectrum analyzer should display a power level near 20dBm (of course, if you have used an attenuator, adjust your reading accordingly). If necessary, adjust

the input power up or down in 0.1dB steps to get the equivalent output power equal to 20dBm at the POUT port.  The power gain (GP = POUT - PIN) should be greater than 30dB.

If  you  cannot  achieve  20dBm output power, verify that the supply voltage between the VCC and GND pads on the EV kit is 3.00V. This ensures that the supply connection wire and current-meter shunt losses are not causing excessive supply voltage drops. Also, make sure the output stage matching network has been properly tuned for the center frequency of interest, according to the CO and CSH trim-capacitor tuning procedure found in the Adjustments and Control section.

- 2) Disable the MAX2430 by moving the J1 shunt to pins 2 and 3. With the part disabled and RF power still applied to the RF input, you can measure the offstate feedthrough of the MAX2430. Adjust your spectrum analyzer to display the amount of 900MHz leakage power that exists at the POUT port. The isolation  should be approximately 50dB, so with an input power of -12dBm, the output power should measure approximately -62dBm.
- 3) Enable the MAX2430 again by moving the J1 shunt to pins 1 and 2. Note that the output power is again around 20dBm.
- 4) Set the spectrum analyzer to display the 1800MHz 2nd harmonic frequency. The measured power should be typically 26dB down from the fundamental power at 900MHz. The 3rd harmonic power at 2700MHz should be typically 40dB down. The threeelement output stage matching circuitry provides some rejection of the harmonic products.
- 5) Set the spectrum analyzer to measure the 900MHz fundamental power. Adjust VCC from 3V up to 5.5V. Note that the output power has risen approximately 2dBm (up to 22dBm) and that the power gain has increased by 2dB.

## Adjustments and Control

## CO and CSH

The quickest method for tuning the output is to apply -20dBm of input power at the desired frequency, then adjust CO and CSH until the output power is maximized as read from a spectrum analyzer or power-meter display.  Only one value of CO and CSH is correct for a given frequency. For best results, use a nonconductive adjustment tool.

CO and CSH are surface-mount, 0pF to 6pF trim capacitors used to tune the output transistor matching

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2430 Evaluation Kits

network to 50 Ω . This ensures maximum power transfer and good output VSWR at any selected narrow-band frequency range of interest between 800MHz and 950MHz. The open-collector output transistor (RFOUT pin) should see approximately a 15 Ω internal load impedance to achieve maximum power gain with the best efficiency. The internal package inductance (5nH), L1 (8nH), series capacitor CO, and shunt capacitor CSH form a 15 Ω to  50 Ω tuneable matching network. Resistor RC enhances stability under load mismatch conditions and does not affect normal operation of the circuit.  The  47nH  supply  choke (labeled LC) provides DC bias.

## Shutdown Control

The SHDN pin is TTL/CMOS compatible and is used to enable (or disable) the MAX2430. Table 1 lists the options available for the shutdown control jumper, J1. To use an external control signal, remove the shunt on J1 completely, and connect the external signal to the pad marked SHDN .  The external control signal should not exceed VCC. Supply current in the disabled mode

Table 1.  Jumper J1 Functions

| SHUNT LOCATION   | SHDN PIN          | MAX2430 STATUS   |
|------------------|-------------------|------------------|
| 1 & 2            | Connected to V CC | Enabled          |
| 2 & 3            | Connected to GND  | Disabled         |

is typically less than 1µA.

BIAS Pin section of the MAX2430 data sheet for more information on output power control.

## Layout Considerations

The evaluation board can serve as a guide for board layout. Grounding is critical for the proper operation and stability  of  the  MAX2430. The following considerations were taken into account on the evaluation board. C1, C2, and C3 should be small surface-mount capacitors, placed directly from each effective VCC terminal to the ground plane. Make connections short (not through vias or long traces). C5 and C6 should be surface-mount capacitors, located as close to the MAX2430 as possible for best results. C2 should be next to L2. C3 should be next to LC. LC should be perpendicular to L1, and L1 perpendicular to L2 to ensure minimal coupling.

The evaluation board has four layers made from FR4 ( e R = 4.0 to 4.6) with 1oz. copper. The first two layers (signal and ground planes) are 14 mils apart, which provides a 50 Ω characteristic impedance from 25mil-wide traces. These trace widths are used for PIN and POUT to maintain a 50 Ω environment out to the SMA connectors. The third layer is used for the VCC supply plane. The fourth layer is used for the SHDN pin jumper connections and BIAS pin signal routing. The ground metal, connected with vias on the first and second layers, acts as a heatsink for the MAX2430, reducing internal operating temperatures. Note that all ground and VCC plane is removed under matching components (L1, L2, LC, RC, CO, CSH) to minimize parasitic capacitance.

The MAX2430EVKIT-QSOP includes two large holes under the MAX2430 to aid in attachment and removal of the part. These holes are not necessary for proper circuit operation.

## Operation Outside the 800MHz to 950MHz Frequency Band

With minor modifications to the MAX2430 EV kit matching network components, the operating frequency can be tuned to frequencies outside the specified band. Refer to the Applications Information section of the MAX2430 data sheet for more information.

## BIAS Pin

The BIAS pin regulates the ramp-up and ramp-down times of the output RF envelope. It can also be driven externally to control the output power over a 15dB range. The rampup/down slope is set by a capacitor connected from the BIAS pin to ground. The EV kit comes with a 2.2nF capacitor (C6), which yields an RF envelope ramp-up/down time of approximately 10µs. The BIAS pad on the EV kit allows the user to manipulate the MAX2430 BIAS pin. Refer to the

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2430 Evaluation Kits

<!-- image -->

Figure 1.  MAX2430 EV Kit Schematic

Figure 2.  MAX2430 EVKIT-SO Component Placement GuideComponent Side

<!-- image -->

Figure 3.  MAX2430 EVKIT-SO PC Board LayoutComponent Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2430 Evaluation Kits

<!-- image -->

<!-- image -->

Figure 4.  MAX2430 EVKIT-SO PC Board LayoutSolder Side

<!-- image -->

Figure 6.  MAX2430 EV Kit-PwrQSOP Component Placement Guide-Component Side

Figure 5.  MAX2430 EVKIT-SO PC Board Layout-Ground Plane

<!-- image -->

Figure 7.  MAX2430 EV Kit-PwrQSOP PC Board LayoutSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2430 Evaluation Kits

<!-- image -->

Figure 8.  MAX2430 EV Kit-PwrQSOP PC Board LayoutComponent Side

Figure 9.  MAX2430 EV Kit-PwrQSOP PC Board LayoutGround Plane

<!-- image -->

Figure 10.  MAX2430 EV Kit-PwrQSOP PC Board LayoutPower Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

<!-- image -->