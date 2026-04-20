<!-- lastmod 2026-02-27 -->
<!-- image -->

## ADuCM435IE

## Precision Analog Microcontroller, 12-Bit Analog Input/Output with I 3 C Interface, Arm Cortex-M3

## FEATURES

- Analog input and output
- Multichannel, 12-bit, 2 MSPS ADC
- Up to 16 external channels
- Power, VDAC, and temperature monitor internal channels
- Single-ended, differential mode
- 0V to V REF analog input range
- Input buffer included and digital comparators
- Four 12-bit voltage output VDACs
- 4-channel, selectable output range
- 0V to 2.5V or AVDD - 0.1V, 10mA source/sink ability, voltage monitoring
- Four voltage comparators with adjustable hysteresis voltage
- Microcontroller
- 32-bit Arm Cortex-M3 core, 32-bit RISC architecture
- Serial wire port supports code download and debug
- Clocking options
- 16MHz on-chip oscillator, 80MHz/104MHz PLL output
- External clock source
- Memory
- 2× 1MB independent flash/EE memories
- 64kB SRAM with ECC
- Support SPI flash mode for optical DSP firmware
- Software triggered, in circuit reprogrammability via I 2 C
- On-chip peripherals
- 1× UART, 2× SPI, 2× I 2 C serial input and output
- 1 x I 3 C with CMIS hardware co-processor
- GPIO with multilevel voltage (3.3V, 1.8V, and 1.2V) digital inputs
- 3× 16-bit and 1× 32-bit general-purpose timers
- Watchdog timers (WDT)
- 16-bit PWM
- Manchester encoder and decoder
- 32-element PLA
- All GPIOs support external interrupt
- Power
- Multiple supplies
- AVDD, IOVDDx, and DVDD = 2.85V to 3.63V
- Flexible operating modes for low-power applications
- Packages and temperature range
- 4.5mm × 4.5mm, 0.4mm pitch, 81-ball CSP\_BGA
- Fully specified for T J = -40°C to +125°C
- Tools
- Low cost QuickStart development system and full third-party support

## APPLICATIONS

- Optical networking 100G/200G/400G/800G and higher frequency modules

## GENERAL DESCRIPTION

The ADuCM435IE is a fully integrated, single package device that includes high performance analog peripherals together with digital peripherals controlled by an 80MHz/104MHz Arm ®  Cortex ® -M3 processor and with integrated flash memories for code and data.

The analog-to-digital converter (ADC) on the ADuCM435IE provides 12-bit, 2MSPS data acquisition for up to 16 input pins that can be programmed for single-ended or differential operation with up to four analog comparators. Additionally, the die temperature and supply voltages can be measured.

The ADC input voltage is 0V to V REF . V REF is typically 2.52V. A sequencer is provided that allows a user to select a set of ADC channels to be measured in sequence without software involvement during the sequence. The sequence can optionally repeat automatically at a user selectable rate.

The ADuCM435IE supports up to four 12-bit voltage DAC outputs (VDACs). Channel 0 to Channel 3 of the ADuCM435IE VDAC supports a positive voltage range of 0V to 2.5V. This range can be extended to 0V to AVDD. The on-chip buffers on each channel can source 10mA with a maximum 200pF capacitive load.

The ADuCM435IE can be configured with digital and analog outputs retaining their output voltages through a watchdog or software reset sequence. Therefore, a product can remain functional even while the device is resetting itself.

The ADuCM435IE has a low-power Arm Cortex-M3 processor and a 32-bit reduced instruction set computer (RISC) machine that offer up to 130MIPS peak performance. In addition, integrated within the ADuCM435IE are two 1MB flash memories and 64kB SRAM. The flash memory of the ADuCM435IE has two separate 1MB blocks. These two flash memory blocks can also work in SPI flash mode. In this mode, the blocks can be accessed by an SPI host, such as an optical digital signal processor (DSP), with GPIO P2.4 to P2.7.

Note that throughout this data sheet, multifunction pins, such as VDACP0/P5.0, are referred to either by the entire pin name or by a single function of the pin, for example, VDACP0, when only that function is relevant.

For more information on the ADuCM435IE, contact InfoOpticalNetwork@analog.com.

## NOTES

## Legal Terms and Conditions

Information furnished by Analog Devices is believed to be accurate and reliable "as is". However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners. All Analog Devices products contained herein are subject to release and availability.